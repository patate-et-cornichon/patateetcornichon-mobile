import * as React from 'react';
import { Text } from 'react-native';

interface TextProps {
  children: string;
  style?: object;
}

export const OpenSansText = ({ style, ...props }: TextProps) => (
    <Text
        {...props}
        style={[style, { fontFamily: 'open-sans' }]}
    />
);

export const DelishProText = ({ style, ...props }: TextProps) => (
  <Text
    {...props}
    style={[style, { fontFamily: 'delish-pro' }]}
  />
);
