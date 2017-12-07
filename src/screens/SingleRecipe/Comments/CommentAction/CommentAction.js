import React from 'react';
import {ScrollView, View, TextInput, Keyboard, Dimensions} from 'react-native';
import styles from './styles';
import {CommentLayout} from '../CommentItem';
import Text from '../../../../components/Text/Text';
import {headerHeight} from '../../../../config/styles';


const {height: deviceHeight} = Dimensions.get('window');

export default class CommentAction extends React.Component {
    state = {
        content: '',
        contentHeight: 25,
        containerHeight: deviceHeight
    };

    componentDidMount() {
        const {setParams} = this.props.navigation;
        setParams({handleSave: this._saveComment.bind(this)});

        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow.bind(this)
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
    }

    _keyboardDidShow(e) {
        const keyboardHeight = e.endCoordinates.height;
        const containerHeight = deviceHeight - keyboardHeight - headerHeight;
        this.setState({containerHeight});
    }

    /**
     * Check if the user is connected and the comment is not empty
     * and dispatch the postComment action
     *
     * @private
     */
    async _saveComment() {
        const {content} = this.state;
        const {
            isConnected,
            navigation,
            navigation: {setParams},
            actions: {postComment}
        } = this.props;
        const {comment = {}, recipe, addComment} = navigation.state.params;
        const parent = comment.parent || comment.id;

        if (isConnected && content !== '') {
            setParams({saveDisabled: true});

            const commentToPost = {
                recipe: recipe.id,
                content,
                parent
            };

            /**
             * Post the comment
             */
            const {sub_comments, ...postedComment} = await postComment(commentToPost);

            /**
             * Refresh the comment list
             */
            addComment(postedComment);

            navigation.goBack();
        }
    }

    _adjustView() {
        this._scrollView.scrollToEnd();
    }

    _changeContentSize(event) {
        const {contentSize: {height}} = event.nativeEvent;
        const contentHeight = height + 25;

        this.setState({contentHeight});
    }

    render() {
        const {comment: originalComment} = this.props.navigation.state.params;
        const {containerHeight: height, contentHeight} = this.state;

        return (
            <View style={styles.commentActionView}>
                <ScrollView contentContainerStyle={[styles.commentActionContainer]}
                            style={{height}}
                            ref={ref => this._scrollView = ref}
                            onContentSizeChange={() => this._adjustView()}
                            onLayout={() => this._adjustView()}
                            keyboardShouldPersistTaps='always'
                >
                    {
                        originalComment &&
                        <View style={styles.originalComment}>
                            <CommentLayout comment={originalComment}
                                           readonly={true}
                            />
                        </View>
                    }

                    {
                        originalComment &&
                        <Text style={styles.commentResponse}>Réponse :</Text>
                    }
                    <TextInput
                        style={[styles.commentActionInput, {height: contentHeight}]}
                        onChangeText={content => this.setState({content})}
                        onContentSizeChange={event => this._changeContentSize(event)}
                        autoFocus={true}
                        multiline={true}
                        textAlignVertical='top'
                        underlineColorAndroid='transparent'
                        blurOnSubmit={false}
                    />
                </ScrollView>
            </View>
        )
    }
}