import { StyleProp } from 'react-native';
import React from "react";

export interface AccordionItemProps {
    title: string;
    children: React.ReactElement;
    titleStyle?: StyleProp<any> | StyleProp<any>[];
    itemContainerStyle?: StyleProp<any> | StyleProp<any>[];
}
