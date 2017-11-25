import React from 'react';
import {View, ScrollView, Animated} from 'react-native';
import styles from './styles';


class ParallaxView extends React.Component {
    state = {
        scrollY: new Animated.Value(0)
    };

    scrollTo(y) {
        const {windowHeight} = this.props;
        this._scrollView.scrollTo({y: y + windowHeight});
    }

    renderBackground() {
        const {windowHeight, backgroundSource} = this.props;
        const {scrollY} = this.state;
        if (!windowHeight || !backgroundSource) {
            return null;
        }
        return (
            <Animated.Image
                style={[styles.background, {
                    height: windowHeight,
                    transform: [{
                        translateY: scrollY.interpolate({
                            inputRange: [-windowHeight, 0, windowHeight],
                            outputRange: [windowHeight / 2, 0, -windowHeight / 3]
                        })
                    }, {
                        scale: scrollY.interpolate({
                            inputRange: [-windowHeight, 0, windowHeight],
                            outputRange: [2, 1, 1]
                        })
                    }]
                }]}
                source={backgroundSource}>
            </Animated.Image>
        );
    }


    renderHeader() {
        const {windowHeight, backgroundSource} = this.props;
        const {scrollY} = this.state;
        if (!windowHeight || !backgroundSource) {
            return null;
        }
        return (
            <Animated.View style={{
                position: 'relative',
                height: windowHeight,
                opacity: scrollY.interpolate({
                    inputRange: [-windowHeight, 0, windowHeight / 1.2],
                    outputRange: [1, 1, 0]
                }),
            }}>
                {this.props.header}
            </Animated.View>
        );
    }

    render() {
        const {style, scrollableViewStyle} = this.props;
        return (
            <View style={[styles.container, style]}>
                {this.renderBackground()}
                <ScrollView
                    {...this.props}
                    style={styles.scrollView}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                    )}
                    scrollEventThrottle={16}
                    ref={c => this._scrollView = c}
                >
                    {this.renderHeader()}
                    <View style={[styles.content, scrollableViewStyle]}>
                        {this.props.children}
                    </View>
                </ScrollView>
            </View>
        );
    }
}


export default ParallaxView;