import React from 'react';
import {ScrollView, View, TouchableWithoutFeedback} from 'react-native';
import {ImagePicker} from 'expo';
import Input from '../../components/Input/Input';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import styles from './styles';


export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        const {user} = this.props;
        this.state = {
            inputs: {
                avatar: {
                    value: user.avatar
                },
                first_name: {
                    name: 'Prénom',
                    value: user.first_name
                },
                last_name: {
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
            },
            button: {
                disabled: false,
                loading: false
            }
        };
    }

    /**
     * Render fields and set the change state method
     *
     * @returns {any[]}
     * @private
     */
    _renderFields() {
        const {inputs: {avatar, ...inputs}} = this.state;

        return Object.keys(inputs).map(input => {
            const changeState = value => {
                inputs[input].value = value;
                this.setState({
                    inputs: {
                        avatar,
                        ...inputs
                    }
                });
            };

            const isLowerCase = input === 'url' || input === 'email';

            return (
                <Input
                    keyboardType={input === 'email' ? 'email-address' : 'default'}
                    placeholder={inputs[input].name}
                    value={inputs[input].value}
                    style={styles.profileInput}
                    autoCapitalize={!isLowerCase}
                    autoCorrect={!isLowerCase}
                    width="100%"
                    onChangeText={changeState}
                />
            )
        });
    }

    /**
     * Change the current user Avatar:
     * - send a request to the server with the avatar
     * - save the avatar in storage and change the user object
     */
    async _launchImagePicker() {
        const options = {
            allowsEditing: true,
            quality: 0.5,
            aspect: [1, 1]
        };
        const {cancelled, uri: value} = await ImagePicker.launchImageLibraryAsync(options);

        if (!cancelled) {
            const {inputs} = this.state;
            this.setState({
                inputs: {
                    ...inputs,
                    avatar: {
                        value
                    }
                }
            }, () => this._avatar.setAvatar());
        }
    }

    /**
     * Send the user info edited
     */
    async _patchUserInfo() {
        const {actions: {patchUserInfo}} = this.props;
        const {inputs} = this.state;

        this.setState({button: {disabled: true, loading: true}});

        try {
            await patchUserInfo(inputs);
        } finally {
            this.setState({button: {disabled: false, loading: false}});
        }
    }

    render() {
        const {inputs: {avatar}, button: {disabled, loading}} = this.state;

        return (
            <ScrollView style={styles.profileView}>

                {/* User Avatar */}
                <TouchableWithoutFeedback onPress={() => this._launchImagePicker()}>
                    <View style={styles.profileAvatarView}>
                        <Avatar uri={avatar.value}
                                style={styles.profileAvatar}
                                ref={c => this._avatar = c}
                        />
                    </View>
                </TouchableWithoutFeedback>

                {/* Inputs */}
                {
                    this._renderFields()
                }

                {/* Submit Button */}
                <Button text='Mettre à jour'
                        onPress={() => this._patchUserInfo()}
                        disabled={disabled}
                        loading={loading}
                />
            </ScrollView>
        )
    }
}