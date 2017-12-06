import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import AvatarUtils from '../../utils/avatar';


export default class Avatar extends React.Component {
    state = {
        source: ''
    };

    componentWillMount() {
        const {uri} = this.props;
        const source = this._getSource(uri);
        this.setState({source});
    }

    componentWillReceiveProps(newProps) {
        const {uri} = newProps;
        const source = this._getSource(uri);
        this.setState({source});
    }

    /**
     * Require the local Avatar if it is a default Avatar,
     * Else return the URI
     *
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

        return {uri: uri + `?key=${Math.random()}`};
    }

    render() {
        const {style, ...props} = this.props;
        const {source} = this.state;

        return (
            <Image
                source={source}
                style={[styles.avatar, style]}
                {...props}
            />
        )
    }
}

