import React from 'react';
import {View} from 'react-native';
import Content from '../Content';
import Text from '../../../../components/Text/Text';
import styles from '../styles';


const render = (content) => (
    content.map((item, i) => (
        <View key={i} style={styles.listView}>
            <View style={styles.bullet}/>
            <Text style={styles.listItemIngredient}>
                {item}
            </Text>
        </View>
    ))
);

const Ingredients = ({content, changeHeight}) => (
    <Content changeHeight={changeHeight}>
        {render(content)}
    </Content>
);

export default Ingredients;