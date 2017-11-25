import React from 'react';
import {Text} from 'react-native'
import Content from '../Content';
import FormatHTML from '../../../../utils/formatHTML';
import styles from '../styles';


const render = (content) => (
    content.map((item, i) => (
        <Text key={i} style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 20
        }}>
            {FormatHTML.convertToComponent(item, styles.listItemIntroduction)}
        </Text>
    ))
);

const Introduction = ({content, changeHeight}) => (
    <Content changeHeight={changeHeight}>
        {render(content)}
    </Content>
);

export default Introduction;