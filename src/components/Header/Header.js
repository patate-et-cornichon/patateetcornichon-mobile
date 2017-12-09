import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import Text from '../Text/Text';
import styles from './styles';
import {MaterialIcons} from '@expo/vector-icons';
import Avatar from '../Avatar/Avatar';


const UserAvatar = ({user, menu}) => (
    <TouchableWithoutFeedback
        onPress={() => menu.open()}>
        <Avatar uri={user.avatar}
                style={styles.userAvatar}
        />
    </TouchableWithoutFeedback>
);

const HeaderIcon = ({icon: {onPress, name, disabled = false}}) => (
    <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
        <MaterialIcons name={name}
                       style={styles.headerIcon}
                       size={28}
                       color={styles.title.color}
        />
    </TouchableWithoutFeedback>
);

const Header = ({title, enableUser, menu, leftIcon, rightIcon}) => {
    const LIMIT_TITLE = 26;
    return (
        <View style={styles.headerView}>
            {/* Left Side */}
            <View style={styles.headerSide}>
                {
                    leftIcon &&
                    <HeaderIcon icon={leftIcon}/>
                }
            </View>

            {/* Center */}
            <View style={styles.headerCenter}>
                <Text style={styles.title}>
                    {
                        title.length > LIMIT_TITLE ?
                            `${title.substring(0, LIMIT_TITLE)}...` :
                            title
                    }
                </Text>
            </View>

            {/* Right Side */}
            <View style={styles.headerSide}>
                {
                    enableUser &&
                    <UserAvatar user={enableUser} menu={menu}/>
                }
                {
                    rightIcon &&
                    <HeaderIcon icon={rightIcon}/>
                }
            </View>
        </View>
    )
};

export default Header;