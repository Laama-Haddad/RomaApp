import React from 'react';
import { AccordionListProps } from "../../resources/interfaces/components/accordionList";
import AccordionItem from "../AccordionItem";
import { ScrollView } from "react-native";
import { getByLanguage } from "../../utils/langFuncs";

const AccordionList = ({data, itemContainerStyle, titleStyle, containerStyle}: AccordionListProps) => {
    return (<ScrollView style={containerStyle} showsVerticalScrollIndicator={false}>
        {data.map((item, key) => <AccordionItem key={key} title={item[getByLanguage('title')]}
                                                itemContainerStyle={itemContainerStyle}
                                                titleStyle={titleStyle}>{item[getByLanguage('content')]}</AccordionItem>)}
    </ScrollView>);
}
export default AccordionList;

