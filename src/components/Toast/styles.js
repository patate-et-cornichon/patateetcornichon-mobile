import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    toastView: {
        width: '100%',
        position: 'absolute'
    },
    toastContainer: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 15,
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: 'roboto',
        fontSize: 18,
        color: 'white'
    }
});

export default styles;