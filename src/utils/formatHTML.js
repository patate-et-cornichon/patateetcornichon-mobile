import React from 'react';
import {StyleSheet, Linking} from 'react-native';
import InlineImage from '../components/InlineImage';
import Text from '../components/Text/Text';
import {primaryColor} from '../config/styles';


const happy = require('../assets/images/smileys/happy.png');
const wink = require('../assets/images/smileys/wink.png');

const styles = StyleSheet.create({
    smiley: {
        width: 22,
        height: 22
    }
});


export default class FormatHTML {
    /**
     * Convert a HTML list to Javascript Array
     *
     * @param value
     * @returns {Array}
     */
    static convertListToArray(value) {
        const reg = /\s*(?!<(\/?)a[^>]*>)(<[^>]*>)/g;
        value = value.replace(/(\r\n|\n|\r)/gm, '');
        value = value.replace(/<(\/?)strong>/g, '');
        value = value.split(reg).filter(item => !reg.test(item) && item !== '' && item !== undefined);
        return value;
    }

    /**
     * Convert elements like HTML link or smiley to JSX
     *
     * @param content
     * @param contentStyles
     * @returns {Array}
     */
    static convertToComponent(content, contentStyles) {
        const smileysOrLink = /([:;]-?\))|(<a.*<\/a>)/g;
        const splitContent = content.split(smileysOrLink).filter(item => item !== '' && item !== undefined);

        const newContent = splitContent.map((item, i) => {
            if (/(<a.*<\/a>)/g.test(item)) {
                const linkReg = /[^<]*(<a href="([^"]+)">([^<]+)<\/a>)/g;
                const link = item.replace(linkReg, '$2');
                const anchor = item.replace(linkReg, '$3');

                return (
                    <Text key={i}
                          style={[contentStyles, {color: primaryColor}]}
                          onPress={() => Linking.openURL(link)}
                    >
                        {anchor}
                    </Text>
                )
            }
            else if (/:-?\)/g.test(item)) {
                return (
                    <InlineImage key={i}
                                 fadeDuration={0}
                                 source={happy}
                                 style={styles.smiley}
                    />
                );
            }
            else if (/;-?\)/g.test(item)) {
                return (
                    <InlineImage key={i}
                                 fadeDuration={0}
                                 source={wink}
                                 style={styles.smiley}
                    />
                );
            }
            else {
                return (
                    <Text key={i}
                          style={contentStyles}
                    >
                        {item}
                    </Text>
                );
            }
        });

        return newContent.map(item => item);
    }

    /**
     * Remove the HTML Tags
     *
     * @param content
     */
    static removeTags(content) {
        const reg = /(<([^>]+)>)/ig;
        return content.replace(reg, '');
    }
}