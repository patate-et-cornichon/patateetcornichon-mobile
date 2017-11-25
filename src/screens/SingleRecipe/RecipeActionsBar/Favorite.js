import React from 'react';
import {Animated, TouchableWithoutFeedback} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import styles from './styles';
import {fontColor} from '../../../config/styles';


export default class Favorite extends React.Component {
    state = {
        scale: new Animated.Value(0)
    };

    /**
     * Animate the favorite button
     *
     * @private
     */
    _triggerFav() {
        const {changeFavorite} = this.props;
        const {scale} = this.state;

        Animated.spring(scale, {
            toValue: 2,
            friction: 3
        }).start(() => scale.setValue(0));

        changeFavorite();
    }

    render() {
        const {filled} = this.props;
        const {scale} = this.state;

        const bouncyFav = scale.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [1, .8, 1]
        });

        const favStyle = {
            transform: [
                {scale: bouncyFav}
            ]
        };

        return (
            <TouchableWithoutFeedback onPress={() => this._triggerFav()}>
                <Animated.View style={favStyle}>
                    <MaterialIcons name={filled ? 'turned-in' : 'turned-in-not'}
                                   size={30}
                                   color={fontColor}
                                   style={styles.favoriteStyle}
                    />
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}