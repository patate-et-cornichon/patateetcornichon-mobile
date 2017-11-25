import React from 'react';
import {TouchableWithoutFeedback, ActivityIndicator, Animated, Text} from 'react-native';
import {capitalize, convertWidth, shadeColor} from '../../utils/functions';
import styles from './styles';

export default class Button extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0)
    };

    static defaultProps = {
        text: '',
        color: 'primary',
        loading: false,
        width: null,
        fontSize: '16',
        style: {},
        disabled: false,
        onPress: f => f
    };

    changeOpacity(value) {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: value,
                duration: 200
            }
        ).start()
    }

    render() {
        const {
            text,
            fontSize,
            color,
            width,
            onPress,
            disabled,
            style,
            loading
        } = this.props;
        const {fadeAnim} = this.state;

        const button = styles['button' + capitalize(color)];
        const buttonText = styles['buttonText' + capitalize(color)];
        const buttonWidth = convertWidth(width);

        const backgroundColor = fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [shadeColor(button.backgroundColor), shadeColor(button.backgroundColor, -20)]
        });
        const opacity = disabled ? 0.7 : 1;

        return (
            <TouchableWithoutFeedback
                disabled={disabled}
                onPress={onPress}
                onPressIn={() => this.changeOpacity(1)}
                onPressOut={() => this.changeOpacity(0)}
            >

                <Animated.View style={[button, style, {backgroundColor, opacity, width: buttonWidth}]}>
                    <Text style={{...buttonText, fontSize: parseInt(fontSize), opacity: loading ? 0 : 1}}>
                        {text.toUpperCase()}
                    </Text>
                    <ActivityIndicator style={[styles.activityIndicator, {opacity: loading ? 1 : 0}]}
                                       color='white'/>
                </Animated.View>

            </TouchableWithoutFeedback>
        )
    }
}