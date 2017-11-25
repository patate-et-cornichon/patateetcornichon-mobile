import {StyleSheet} from 'react-native';
import {defaultBorderColor} from '../../config/styles';


const styles = StyleSheet.create({
    scrollableView: {
        backgroundColor: 'white'
    },
    recipeContainer: {
        padding: 15
    },
    recipeTitle: {
        fontFamily: 'amatic',
        textAlign: 'center',
        lineHeight: 45,
        fontSize: 38
    },
    recipeCategories: {
        opacity: 0.5,
        textAlign: 'center',
        fontSize: 12,
        paddingTop: 8,
        paddingBottom: 15
    }
});

export default styles;