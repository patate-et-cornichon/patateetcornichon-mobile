import React from 'react'
import { View, ScrollView, FlatList, StatusBar } from 'react-native'
import shortid from 'shortid'
import styles from './styles'
import RecipeCard from './RecipeCard/RecipeCard'
import Text from '../../components/Text/Text'
import Header from './Header/Header'
import Categories from './Categories'
import Search from './Header/Search'

export default class Recipes extends React.PureComponent {
  LIMIT = 10

  state = {
    activeCategory: null,
    activeSubCategory: null,
    subCategories: [],
    recipesCategory: null,
    recipesPage: 0,
    isLoading: false
  }

  componentWillMount () {
    const {actions: {fetchCategories, getRecipesByCategories}} = this.props
    fetchCategories()
    getRecipesByCategories()
  }

  /**
   * Change Main Category
   *
   * @param category
   * @private
   */
  async _changeCategory (category) {
    const {activeCategory} = this.state

    if (activeCategory === category.slug) {
      await this.setState({
        recipesCategory: null,
        activeCategory: null,
        subCategories: []
      })
    } else {
      await this.setState({
        recipesCategory: category.slug,
        activeCategory: category.slug,
        subCategories: category.subcategories
      })
    }

    await this._getRecipes(false)
  }

  /**
   * Change SubCategory
   *
   * @param category
   * @private
   */
  _changeSubCategory (category) {

  }

  async _getRecipes (add = true) {
    this.setState({isLoading: true})

    const {recipesCategory, recipesPage} = this.state
    const newRecipesPage = add ? recipesPage + this.LIMIT : 0

    this.setState({
      recipesPages: newRecipesPage
    })

    const {actions: {getRecipesByCategories}} = this.props
    await getRecipesByCategories(newRecipesPage, recipesCategory, add)

    this.setState({isLoading: false})
  }

  async _handleScroll ({layoutMeasurement, contentOffset, contentSize}) {
    const {isLoading} = this.state

    const paddingToBottom = 100
    const isClosedToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom

    if (isClosedToBottom && !isLoading) {
      await this._getRecipes()
    }
  }

  render () {
    const {categories, recipes} = this.props
    const {activeCategory, subCategories, isLoading} = this.state

    return (
      <View style={styles.recipesView}>
        <StatusBar barStyle='dark-content' />

        {/* Search */}
        <Search />

        <ScrollView>
          {/* Header */}
          <Header />

          {/* Recipes */}
          <View>
            {/* Categories */}
            <Categories
              categories={categories}
              changeCategory={category => this._changeCategory(category)}
              activeCategory={activeCategory}
          />
          </View>
          {
          recipes.length > 0 &&
          <FlatList
            keyExtractor={() => shortid.generate()}
            onScroll={({nativeEvent}) => this._handleScroll(nativeEvent)}
            scrollEventThrottle={0}
            contentContainerStyle={styles.recipesFlatList}
            data={recipes}
            renderItem={({item}) => (
              <RecipeCard
                recipe={item}
                keyExtractor={item => item.id}
              />
            )}
          />
        }
          {
          isLoading &&
          <Text>Loading...</Text>
        }
        </ScrollView>
      </View>
    )
  }
}
