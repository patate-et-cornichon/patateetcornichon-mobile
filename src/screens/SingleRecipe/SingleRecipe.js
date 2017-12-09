import React from 'react'
import { Animated, Platform, View } from 'react-native'
import Text from '../../components/Text/Text'
import ParallaxView from '../../components/ParallaxView/ParallaxView'
import styles from './styles'
import RecipeActionsBar from './RecipeActionsBar/RecipeActionsBar'
import Introduction from './Content/Introduction/Introduction'
import Steps from './Content/Steps/Steps'
import SwipeControl from './SwipeControl/SwipeControl'
import Ingredients from './Content/Ingredients/Ingredients'
import Swiper from '../../components/Swiper/Swiper'
import RecipeMeta from './RecipeMeta/RecipeMeta'
import Comments from './Comments/Comments'
import RelativeRecipes from './RelativeRecipes/RelativeRecipes'

const AnimatedSwiper = Animated.createAnimatedComponent(Swiper)

export default class SingleRecipe extends React.Component {
  COMMENTS_LIMIT = 5

  state = {
    swiperIndex: 0,
    comments: {
      data: [],
      endComments: false
    },
    commentsOffset: 0,
    commentsLoading: false,
    swiperHeights: []
  }

  componentWillMount () {
    this._getRecipe()
  }

  _getRecipe () {
    const {recipe} = this.props.navigation.state.params
    this.setState({recipe}, () => this._getComments())
  }

  /**
   * Change the Swiper Index when the user press on the Swiper Button
   *
   * @param index
   * @private
   */
  _changeSwiperIndex (index) {
    const {swiperIndex, swiperHeights} = this.state

    if (index !== swiperIndex) {
      const newHeight = swiperHeights[index]

      this.setState({
        swiperIndex: index
      })

      this.refs.swiper._component.scrollTo(index)

      this._animateHeight(newHeight)
    }
  }

  /**
   * Set and animation value to the Swiper Height
   *
   * @param newHeight
   * @private
   */
  _animateHeight (newHeight) {
    Animated.spring(
      this.state.swiperHeight,
      {
        toValue: newHeight
      }
    ).start()
  }

  /**
   * Set the Swiper Height according to the child component Height
   *
   * @param index
   * @param height
   * @private
   */
  _setSwiperHeight (index, height) {
    const {swiperHeights} = this.state

    swiperHeights[index] = height
    this.setState({swiperHeights})

    if (index === 0) {
      this.setState({
        swiperHeight: new Animated.Value(height)
      })
    }
  }

  /**
   * Fetch the comments from the API
   *
   * @private
   */
  async _getComments () {
    const {recipe, commentsOffset, comments: {data}} = this.state
    const {fetchComments} = this.props.actions

    const comments = await fetchComments(recipe.slug, this.COMMENTS_LIMIT, commentsOffset)

    this.setState({
      comments: {
        data: [
          ...data,
          ...comments.data
        ],
        endComments: comments.endComments
      },
      commentsLoading: false
    })
  }

  /**
   * Add a comment in the state if a comment is posted
   *
   * @param comment
   * @private
   */
  _addComment (comment) {
    const {comments} = this.state

    if (!comment.parent) {
      comments.data = [
        comment,
        ...comments.data
      ]
    } else {
      const searchedComment = comments.data.filter(data => data.id === comment.parent)[0]

      searchedComment.sub_comments = [
        ...searchedComment.sub_comments,
        comment
      ]
    }

    this.setState({comments})
  }

  /**
   * Load more comments
   *
   * @private
   */
  _getMoreComments () {
    const {commentsOffset} = this.state
    this.setState({commentsLoading: true})
    this.setState({
      commentsOffset: commentsOffset + this.COMMENTS_LIMIT
    },
      async () => this._getComments()
    )
  }

  /**
   * Scroll to comments position
   */
  _goToComments () {
    this._parallaxView.scrollTo(this._commentsComponent.y)
  }

  async _isRecipeFavorite () {
    const {recipe} = this.state
    const {actions: {isRecipeFavorite}} = this.props

    return isRecipeFavorite(recipe.id)
  }

  render () {
    const {
      user,
      navigation,
      isConnected,
      relativeRecipes,
      actions,
      components: {toast}
    } = this.props
    const {recipe, swiperIndex, swiperHeight, commentsLoading, comments} = this.state

    if (!recipe) {
      return null
    }

    return (
      <ParallaxView
        ref={(c) => (this._parallaxView = c)}
        backgroundSource={{uri: recipe.main_image}}
        windowHeight={Platform.OS === 'ios' ? 300 : 250}
        scrollableViewStyle={styles.scrollableView}
      >
        {/* Container */}
        <View style={styles.recipeContainer}>
          {/* Recipe Title */}
          <Text style={styles.recipeTitle}>
            {recipe.full_title}
          </Text>

          {/* Recipe Categories */}
          <Text style={styles.recipeCategories}>
            {
              recipe.categories.map((category, index) => (
                `${category.name.toUpperCase()}${index !== recipe.categories.length - 1 ? ' - ' : ''}`
              ))
            }
          </Text>

          {/* Recipe Actions */}
          <RecipeActionsBar
            setRecipeAsFavorite={() => actions.setRecipeAsFavorite(recipe)}
            removeRecipeAsFavorite={() => actions.removeRecipeAsFavorite(recipe)}
            isRecipeFavorite={this._isRecipeFavorite.bind(this)}
            toast={toast}
            date={recipe.created_at}
            goToComments={() => this._goToComments()}
          />

          {/* Recipe Meta */}
          <RecipeMeta {...recipe} />

          {/* Swiper Buttons Control */}
          <SwipeControl
            onPress={(index) => this._changeSwiperIndex(index)}
            activeIndex={swiperIndex}
          />

          {/* Swiper Screens */}
          <AnimatedSwiper
            style={{height: swiperHeight}}
            scrollEnabled={false}
            ref='swiper'
          >
            {/* Recipe Intro */}
            <Introduction content={recipe.introduction}
              changeHeight={(h) => this._setSwiperHeight(0, h)}
            />

            {/* Recipe Ingredients */}
            <Ingredients content={recipe.ingredients}
              changeHeight={(h) => this._setSwiperHeight(1, h)}
            />

            {/* Recipe Content */}
            <Steps content={recipe.recipe_steps}
              changeHeight={(h) => this._setSwiperHeight(2, h)}
            />
          </AnimatedSwiper>
        </View>

        {/* Comments */}
        <Comments data={comments.data}
          endComments={comments.endComments}
          commentsLoading={commentsLoading}
          isConnected={isConnected}
          recipe={recipe}
          commentsLength={recipe.comments_nb}
          user={user}
          navigation={navigation}
          ref={c => (this._commentsComponent = c)}
          addComment={(comment) => this._addComment(comment)}
          getMoreComments={() => this._getMoreComments()}
        />

        {/* Relative Recipes */}
        <RelativeRecipes
          recipeSlug={recipe.slug}
          relativeRecipes={relativeRecipes}
          navigation={navigation}
          actions={actions}
        />
      </ParallaxView>
    )
  }
}
