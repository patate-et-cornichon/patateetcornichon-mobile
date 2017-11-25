import React from 'react';
import {TouchableWithoutFeedback, View, FlatList} from 'react-native';
import Text from '../../../components/Text/Text';
import CommentItem from './CommentItem';
import Avatar from '../../../components/Avatar/Avatar';
import styles from './styles';
import Button from '../../../components/Button/Button';


const commentText = commentsLength => {
    switch (commentsLength) {
        case 0:
            return 'Pas encore de petit mot !';
        case 1:
            return 'Un petit mot';
        default:
            return `${commentsLength} petits mots`;
    }
};

const MoreComments = ({getMoreComments, endComments, commentsLoading}) => {
    if (!endComments) {
        return (
            <Button text={'Plus de commentaires'.toUpperCase()}
                    onPress={getMoreComments}
                    style={styles.moreComments}
                    loading={commentsLoading}
            />
        )
    } else {
        return null;
    }
};


class CommentsList extends React.Component {
    render() {
        const {data, recipe, addComment, commentsLength, user, navigation} = this.props;
        return (
            <View>
                {/* Comment numbers */}
                <Text style={styles.commentsLength}>
                    {commentText(commentsLength)}
                </Text>

                {/* Comment Action */}
                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('CommentAction', {
                        recipe,
                        addComment
                    })}
                >
                    <View style={styles.commentActionView}>
                        <Avatar uri={user.avatar}/>
                        <Text style={styles.commentAction}>
                            {'Laisser un petit mot'.toUpperCase()}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                {/* All Comments */}
                {
                    data ?
                        <FlatList
                            data={data}
                            extraData={this.props}
                            keyExtractor={(item) => item.id}
                            renderItem={({item}) => (
                                <CommentItem comment={item}
                                             recipe={recipe}
                                             navigation={navigation}
                                             addComment={addComment}
                                />
                            )}
                        />
                        : null
                }
            </View>
        )
    }
}


class Comments extends React.Component {
    render() {
        const {
            isConnected,
            getMoreComments,
            endComments,
            commentsLoading,
            ...props
        } = this.props;

        return (
            <View style={styles.commentListView}
                  ref={c => this._commentsComponent = c}
                  onLayout={({nativeEvent: {layout}}) => this.y = layout.y}
            >
                {
                    isConnected ?
                        <View>
                            <CommentsList {...props}/>
                            <MoreComments getMoreComments={getMoreComments}
                                          endComments={endComments}
                                          commentsLoading={commentsLoading}
                            />
                        </View> :
                        <Text style={styles.noComments}>
                            Il faut être connecté pour charger les commentaires ! :-)
                        </Text>
                }
            </View>
        )
    }
}

export default Comments;