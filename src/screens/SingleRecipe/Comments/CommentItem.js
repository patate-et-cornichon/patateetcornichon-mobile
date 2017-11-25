import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import Text from '../../../components/Text/Text';
import Avatar from '../../../components/Avatar/Avatar';
import Moment from '../../../utils/moment';
import FormatHTML from '../../../utils/formatHTML';
import {secondaryColor} from '../../../config/styles';
import styles from './styles';


export const CommentLayout = ({comment, recipe, addComment, isSubcomment, navigation, readonly = false}) => (
    <View style={isSubcomment ? styles.subcommentView : null}>
        {/* Comment Author */}
        <View style={styles.commentAuthorView}>
            {/* Comment Avatar */}
            <Avatar uri={comment.author_avatar}/>

            {/* Comment Author Info */}
            <View style={styles.commentAuthorInfo}>
                <Text style={styles.commentAuthorName}>
                    {comment.author}
                </Text>
                <Text style={styles.commentAuthorDate}>
                    {Moment.transform(comment.created_at, 'humanize')}
                </Text>
            </View>
        </View>

        {/* Comment Content */}
        <Text style={styles.commentContent}>
            {FormatHTML.removeTags(comment.content)}
        </Text>

        {/* Reply Icon */}
        {
            !readonly &&
            <TouchableOpacity
                onPress={() => navigation.navigate('CommentAction', {
                    comment,
                    recipe,
                    addComment
                })}
                style={styles.commentReplyIcon}>
                <MaterialIcons name='reply'
                               size={28}
                               color={secondaryColor}
                />
            </TouchableOpacity>
        }
    </View>
);

const CommentItem = ({comment, recipe, navigation, addComment}) => (
    <View style={styles.commentView}>
        <CommentLayout comment={comment}
                       recipe={recipe}
                       navigation={navigation}
                       addComment={addComment}
        />
        {
            comment.sub_comments &&
            comment.sub_comments.map((subComment, i) => (
                <CommentLayout key={i}
                               comment={subComment}
                               recipe={recipe}
                               isSubcomment={true}
                               navigation={navigation}
                               addComment={addComment}
                />
            ))
        }
    </View>
);

export default CommentItem;