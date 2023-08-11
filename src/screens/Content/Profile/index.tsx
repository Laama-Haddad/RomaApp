import React from 'react';
import styled, { useTheme } from "styled-components/native";
import { ProfileProps } from "../../../resources/interfaces/screens/profile";
import MainLayout from "../../MainLayout";
import { tr } from "../../../resources/translations";
import { hdp, wdp } from "../../../utils/responsive";
import { user } from '../../../resources/static/user';
import TextGeneric from "../../../components/TextGeneric";
import GenericButton from "../../../components/Button";
import { I18nManager, Platform, TouchableOpacity } from "react-native";
import { RootState } from "../../../redux/store";
import { connect } from "react-redux";
import { setAuthStatus } from "../../Auth/SignInWithEmail/action";
import Icon from "../../../components/Icon";
import { ToggleAuth } from "../../../utils/authFuncs";

const Container = styled.View`
    background:${({theme}) => theme.profile.background};
    align-items:center;
`;
const TopView = styled.View`
    background-color:${({theme}) => theme.profile.topBackground};
    height:${hdp(25)}px;
    width:90%;
    border-radius:15px;
    justify-content:center;
    align-items:center;
    margin:5%;
`;
const ProfileImage = styled.Image`
    width:${wdp(20)}px;
    height:${wdp(20)}px;
    border-radius:${wdp(20) / 2}px;
`;
const Name = styled(TextGeneric)`
    color:${({theme}) => theme.profile.label};
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    font-weight:${Platform.OS === 'ios' ? '500' : 'bold'};
    padding-top: 6%;
    padding-bottom: 4%;
`;
const Balance = styled(TextGeneric)`
    color:${({theme}) => theme.profile.balance};
    font-size:${({theme}) => theme.text.s8}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
`;
const BottomView = styled.ScrollView`
    background-color:${({theme}) => theme.profile.topBackground};
    width:100%;
    border-top-left-radius:25px;
    border-top-right-radius:25px;
`;
const list = [{
    id: 0, title: 'notifications', routeName: 'notifications', iconType: 'SVG', iconName: 'notification'
}, {id: 1, title: 'orders', routeName: 'orderHistory', iconType: 'SVG', iconName: 'order'}, {
    id: 2, title: 'address', routeName: 'myAddresses', iconType: 'SVG', iconName: 'address'
}, {id: 3, title: 'rate', routeName: 'deliveryReview', iconType: 'SVG', iconName: 'solidStar'}, {
    id: 4, title: 'wishList', routeName: 'Wishlist', iconType: 'SVG', iconName: 'solidHeart'
}, {id: 5, title: 'settings', routeName: 'settings', iconType: 'SVG', iconName: 'settings'}, {
    id: 6, title: 'info', routeName: 'faq', iconType: 'SVG', iconName: 'info'
}, {id: 7, title: 'logout', routeName: 'logout', iconType: 'SVG', iconName: 'logout'},];
const Profile = ({navigation}: ProfileProps) => {
    const theme = useTheme();
    return (<MainLayout backgroundColor={theme.profile.headerBackground}
                        tabHeader={true} menuColor={theme.profile.headerIcon}
                        onMenuPress={() => navigation?.toggleDrawer()}
                        iconSize={theme.text.s2}
                        title={tr('profile.headerTitle')}
                        titleColor={theme.profile.headerTitle}
                        noPadding={true} tabPage={true}>

        <Container>
            <TopView>
                <TouchableOpacity onPress={() => navigation?.navigate('profileDetails')}>
                    <ProfileImage
                        source={{uri: !!user.profileImage ? user.profileImage : 'https://dummyimage.com/80/cccccc/000000'}}/>
                    <Icon name={'edit'} type={'MaterialIcons'} color={theme.profile.editIcon} size={theme.text.s10}
                          role={'button'} onPress={() => {
                    }} disabled
                          style={{
                              backgroundColor: theme.profile.editIconBackground,
                              width: wdp(5),
                              height: wdp(5),
                              position: 'absolute',
                              right: wdp(1),
                              bottom: wdp(1)
                          }}/>
                </TouchableOpacity>
                <Name>{user.userName}</Name>
                <Balance>{tr('profile.balance')}: ${user.balance.toFixed(2)}</Balance>
            </TopView>
            <BottomView>
                {list.map((item, key) => <GenericButton key={key} title={tr('profile.' + `${item.title}`)}
                                                        titleStyle={{
                                                            marginHorizontal: '5%',
                                                        }}
                                                        onPress={() => item.routeName === 'logout' ? ToggleAuth({logged: false}).then() : navigation?.navigate(item.routeName)}
                                                        showLeftIcon={true} leftIconName={item.iconName}
                                                        leftIconType={item.iconType} leftIconSize={theme.text.s7}
                                                        leftIconColor={theme.profile.itemIcon}
                                                        leftIconStyle={{
                                                            backgroundColor: theme.profile.itemIconBackground + '22',
                                                            paddingLeft: 0,
                                                            width: wdp(10),
                                                            height: wdp(10)
                                                        }}
                                                        showRightIcon={true}
                                                        rightIconName={I18nManager.isRTL ? "keyboard-arrow-left" : "keyboard-arrow-right"}
                                                        rightIconType={'MaterialIcons'}
                                                        rightIconSize={theme.text.s2}
                                                        rightIconColor={theme.profile.itemIcon}
                                                        containerStyle={{
                                                            marginLeft: '7%', marginVertical: '2%'
                                                        }}/>)}
            </BottomView>
        </Container>


    </MainLayout>);
}
const mapStateToProps = (state: RootState) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {setAuthStatus})(Profile);
