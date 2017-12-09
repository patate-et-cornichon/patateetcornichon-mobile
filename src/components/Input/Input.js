import React from 'react';
import {TextInput, Animated} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import styles from './styles';
import {convertWidth, shadeColor} from '../../utils/functions';

export default class Input extends React.Component {

    state = {
        fadeAnim: new Animated.Value(0)
    };

    _changeOpacity(value) {
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
            backgroundColor = '#BDC3C7',
            width,
            color = '#616b72',
            placeholderColor = '#88939a',
            icon,
            style,
            ...props
        } = this.props;
        const {fadeAnim} = this.state;

        const inputWidth = convertWidth(width);

        const inputBackgroundColor = fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [shadeColor(backgroundColor), shadeColor(backgroundColor, 5)]
        });

        return (
            <Animated.View style={[
                {
                    ...styles.inputContainer,
                    backgroundColor: inputBackgroundColor,
                    width: inputWidth,
                },
                style
            ]}>

                {/* Icon */}
                {
                    icon &&
                    <MaterialIcons style={styles.icon} name={icon} size={22} color={placeholderColor}/>
                }

                {/* TextInput */}
                <TextInput
                    onFocus={() => this._changeOpacity(1)}
                    onBlur={() => this._changeOpacity(0)}
                    style={{...styles.input, color}}
                    placeholderTextColor={placeholderColor}
                    underlineColorAndroid='transparent'
                    {...props}
                />

            </Animated.View>
        )
    }
}