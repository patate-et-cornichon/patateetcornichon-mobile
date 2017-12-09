import { StyleSheet } from 'react-native'
import { defaultBackground, defaultBorderColor, defaultFontStyle } from '../../../config/styles'

const commentsText = {
  fontSize: 17,
  padding: 15,
  color: '#ccc'
}

const styles = StyleSheet.create({
  commentListView: {
    backgroundColor: defaultBackground,
    flex: 1
  },
  noComments: {
    ...commentsText,
    textAlign: 'center'
  },
  moreComments: {
    margin: 15,
    borderRadius: 7
  },
  commentsLength: {
    ...commentsText
  },
  commentActionView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: defaultBorderColor,
    padding: 15
  },
  commentAction: {
    paddingLeft: 10,
    fontSize: 14
  },
  commentView: {
    backgroundColor: 'white',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: defaultBorderColor,
    padding: 15,
    marginTop: 15
  },
  commentAuthorView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  commentAuthorInfo: {
    paddingLeft: 10
  },
  commentAuthorName: {
    fontFamily: 'roboto-bold'
  },
  commentAuthorDate: {
    color: '#7c7c7c'
  },
  commentContent: {
    ...defaultFontStyle,
    paddingTop: 10
  },
  subcommentView: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: defaultBorderColor,
    paddingTop: 10,
    marginTop: 10
  },
  commentReplyIcon: {
    position: 'absolute',
    top: 10,
    right: 10
  }
})

export default styles
