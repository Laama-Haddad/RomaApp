import {StyleProp} from 'react-native';
import React from "react";

export interface AccordionItemProps {
    id: number;
    title_en: string;
    title_ar:string;
    content_en: React.ReactElement;
    content_ar: React.ReactElement;
}

export interface AccordionListProps {
    data: AccordionItemProps[];
    titleStyle?: StyleProp<any> | StyleProp<any>[];
    itemContainerStyle?: StyleProp<any> | StyleProp<any>[];
    containerStyle?: StyleProp<any> | StyleProp<any>[];
}
