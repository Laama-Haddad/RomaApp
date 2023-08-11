import React from 'react';
import styled, { useTheme } from "styled-components/native";
import MainLayout from "../../MainLayout";
import EmptyNotifications from '../../../resources/assets/emptyNotification.svg';
import { tr } from "../../../resources/translations";
import { hdp, wdp } from "../../../utils/responsive";
import TextGeneric from "../../../components/TextGeneric";
import { notificationList } from "../../../resources/static/notificationList";
import { FlatList } from "react-native";
import NotificationItemList from "../../../components/NotificationItemList";
import { getByLanguage } from "../../../utils/langFuncs";

const Container = styled.View`
    background-color:${({theme}) => theme.notifications.background};
    height:100%;
    padding-horizontal:5%;
    padding-vertical:5%;
`;
const EmptyContainer = styled.View`
    align-items:center;
    justify-content: center;
    height: ${hdp(75)}px;
`;
const EmptyCart = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.cart.label};
    width:55%;
    padding-vertical: 4%;
    text-align:center;
`;

const Notifications = ({navigation}) => {
    const theme = useTheme();
    const renderItem = ({item}) => {
        return (
            <NotificationItemList type={item.type} title={item[getByLanguage('title')]} description={item[getByLanguage('description')]}/>
        );
    }
    return (
        <MainLayout backHeader backColor={theme.notifications.headerBack} titleColor={theme.notifications.headerTitle}
                    backgroundHeader={theme.notifications.headerBackground}
                    enableScroll={false} noPadding
                    onBackPress={() => navigation.goBack()}
                    title={tr('notifications.title')}>
            <Container>
                {notificationList.length != 0 ? <FlatList data={notificationList} renderItem={renderItem}
                                                          keyExtractor={(item) => item.id.toString()}/>
                    : <EmptyContainer>
                        <EmptyNotifications width={wdp(70)} height={wdp(50)}/>
                        <EmptyCart>{tr('notifications.empty')}</EmptyCart>
                    </EmptyContainer>}
            </Container>
        </MainLayout>)
}

export default Notifications;
