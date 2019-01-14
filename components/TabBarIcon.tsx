import { Icon } from 'expo';
import * as React from 'react';

import Colors from '../constants/Colors';

interface TabBarIconProps {
  name: string;
  focused: boolean;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ name, focused }: TabBarIconProps) => (
    <Icon.Ionicons
        name={name}
        size={26}
        style={{ marginBottom: -3 }}
        color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
);

export default TabBarIcon;
