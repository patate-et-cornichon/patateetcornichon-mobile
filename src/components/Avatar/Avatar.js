import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import AvatarUtils from '../../utils/avatar';


export default class Avatar extends React.Component {
    state = {
        avatar: ''
    };

    componentWillMount() {
        this.setAvatar();
    }

    /**
     * If the Avatar Props is differente, we change the avatar state
     *
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        const {uri} = nextProps;
        const {avatar} = this.props;
        if (uri !== avatar) {
            this.setAvatar();
        }
    }

    /**
     * Change Avatar
     */
    setAvatar() {
        const {uri} = this.props;
        const avatar = this._getSource(uri);
        this.setState({avatar});
    }

    /**
     * Check if the avatar if a default one, otherwise we return the avatar URI
     *
     * @param uri
     * @returns {*}
     * @private
     */
    _getSource(uri) {
        if (AvatarUtils.isDefault(uri)) {
            const name = AvatarUtils.getDefaultName(uri);
            switch (name) {
                case 'default_avatar_1':
                    return require('../../assets/images/avatars/default_avatar_1.png');
                case 'default_avatar_2':
                    return require('../../assets/images/avatars/default_avatar_2.png');
                case 'default_avatar_3':
                    return require('../../assets/images/avatars/default_avatar_3.png');
                case 'default_avatar_4':
                    return require('../../assets/images/avatars/default_avatar_4.png');
                case 'default_avatar_5':
                    return require('../../assets/images/avatars/default_avatar_5.png');
                case 'default_avatar_6':
                    return require('../../assets/images/avatars/default_avatar_6.png');
                case 'default_avatar_7':
                    return require('../../assets/images/avatars/default_avatar_7.png');
                case 'default_avatar_8':
                    return require('../../assets/images/avatars/default_avatar_8.png');
            }
        }
        return {uri};
    }

    render() {
        const {avatar} = this.state;
        const {style, ...props} = this.props;

        return (
            <Image
                source={avatar}
                style={[styles.avatar, style]}
                {...props}
            />
        )
    }
}