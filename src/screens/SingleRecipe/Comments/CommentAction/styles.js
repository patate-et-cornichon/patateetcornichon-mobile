import {StyleSheet} from 'react-native';
import {defaultBorderColor, defaultFontStyle} from '../../../../config/styles';


const styles = StyleSheet.create({
    commentActionView: {
        backgroundColor: 'white'
    },
    commentActionContainer: {
        backgroundColor: 'white',
        padding: 20,
    },
    commentActionInput: {
        ...defaultFontStyle,
        flex: 1
    },
    commentResponse: {
        ...defaultFontStyle,
        fontFamily: 'roboto-bold'
    },
    originalComment: {
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: defaultBorderColor
    }
});

export default styles;