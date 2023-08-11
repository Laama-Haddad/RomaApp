import React from 'react';
import { FAQProps } from "../../../resources/interfaces/screens/faq";
import styled, { useTheme } from "styled-components/native";
import { tr } from "../../../resources/translations";
import MainLayout from "../../MainLayout";
import AccordionList from "../../../components/AccordionList";
import { accordionList } from "../../../resources/static/accordionList";
import { hdp } from "../../../utils/responsive";

const Container = styled.View`
    background-color:${({theme}) => theme.faq.background};
    padding:5%;
    height:${hdp(92)}px;
`;
const FAQ = ({navigation}: FAQProps) => {
    const theme = useTheme();

    return (<MainLayout backHeader showBackButton noPadding enableScroll={false}
                        backColor={theme.faq.headerIcon}
                        onBackPress={() => navigation?.goBack()}
                        title={tr('faq.headerTitle')}
                        titleColor={theme.faq.headerTitle}><Container>
        <AccordionList data={accordionList} itemContainerStyle={{marginBottom: '3%'}}/>

    </Container></MainLayout>);
}
export default FAQ;
