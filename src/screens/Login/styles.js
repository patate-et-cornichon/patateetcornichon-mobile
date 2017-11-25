import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    signContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%'
    },
    signContent: {
        width: '90%',
        paddingBottom: 60
    },
    signLogo: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: 80
    },
    quote: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        fontSize: 24,
        color: '#ffffff',
        paddingBottom: 50
    },
    alreadyUser: {
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: 'transparent',
        paddingTop: 10,
        paddingBottom: 4,
        fontSize: 12,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});

export default styles;