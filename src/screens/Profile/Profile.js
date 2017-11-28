import React from 'react';
import {ScrollView, View} from 'react-native';
import Input from '../../components/Input/Input';
import Avatar from '../../components/Avatar/Avatar';
import styles from './styles';


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        const {user} = this.props;
        this.state = {
            inputs: {
                firstName: {
                    name: 'Prénom',
                    value: user.first_name
                },
                lastName: {
                    name: 'Nom',
                    value: user.last_name
                },
                email: {
                    name: 'Email',
                    value: user.email
                },
                url: {
                    name: 'Site web',
                    value: user.url
                }
            }
        };
    }

    _renderFields() {
        const {inputs} = this.state;

        return Object.keys(inputs).map(input => (
            <Input
                placeholder={inputs[input].name}
                value={inputs[input].value}
                style={styles.profileInput}
                width="100%"
            />
        ));
    }

    render() {
        const {user} = this.props;

        return (
            <ScrollView style={styles.profileView}>

                {/* User Avatar */}
                <View style={styles.profileAvatarView}>
                    <Avatar uri={user.avatar} style={styles.profileAvatar}/>
                </View>

                {
                    this._renderFields()
                }
            </ScrollView>
        )
    }
}