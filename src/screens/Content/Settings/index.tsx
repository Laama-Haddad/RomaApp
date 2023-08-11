import React from 'react';
import styled, { useTheme } from "styled-components/native";
import { SettingsProps } from "../../../resources/interfaces/screens/Settings/settings";
import { tr } from "../../../resources/translations";
import MainLayout from "../../MainLayout";
import { user } from "../../../resources/static/user";
import TextGeneric from "../../../components/TextGeneric";
import Icon from "../../../components/Icon";
import { getByScreenSize, wdp } from "../../../utils/responsive";
import GenericButton from "../../../components/Button";
import { I18nManager, View } from "react-native";
import { setAuthStatus } from "../../Auth/SignInWithEmail/action";
import config from "../../../config";
import GenericSwitch from "../../../components/Switch";

const Container = styled.View`
    padding-horizontal:5%;
    background-color:${({theme}) => theme.settings.background};
    padding-top:5%; 
    padding-bottom:10%;
`;
const ProfileNameContainer = styled.TouchableOpacity`
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
    background-color:${({theme}) => theme.settings.contentBackground};
    padding-vertical:4%;
    padding-left:5%;
    padding-right:2%;
    border-radius:10px;
`;
const ProfileImage = styled.Image`
    width:${wdp(15)}px;
    height:${wdp(15)}px;
    border-radius:${wdp(15) / 2}px;
`;
const LeftView = styled.View`
    flex-direction:row;
    align-items:center;
`;
const NameView = styled.View`
    padding-horizontal:5%;
`;
const Name = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.settings.label};
`;
const JobPosition = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s9}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    color:${({theme}) => theme.settings.lightLabel};
`;
const ContentContainer = styled.View`
    border-radius:10px;
    background-color:${({theme}) => theme.settings.contentBackground};
    margin-vertical:5%;
`;
const AccountContainer = styled.View`
    border-top-left-radius:10px;
    border-top-right-radius:10px;
`;
const Accounts = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.settings.accounts};
    background-color:${({theme}) => theme.settings.accountsBackground};
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    padding-vertical:4%;
    padding-horizontal:5%;
    margin-bottom:2%;
`;
const Options = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
    color:${({theme}) => theme.settings.options};
    background-color:${({theme}) => theme.settings.accountsBackground}33;
    padding-vertical:4%;
    padding-horizontal:5%;
    margin-bottom:2%;
`;
const accountsList = [{
    id: 0, title: 'changePassword', routeName: 'changePassword', iconType: 'FontAwesome', iconName: 'lock'
}, {
    id: 1, title: 'orderManagement', routeName: 'orderHistory', iconType: 'MaterialIcons', iconName: 'notifications-on'
}, {
    id: 2, title: 'document', routeName: 'document', iconType: 'Ionicons', iconName: 'settings'
}, {
    id: 3, title: 'payment', routeName: 'paymentHistory', iconType: 'MaterialCommunityIcons', iconName: 'card'
}, {id: 4, title: 'signOut', routeName: 'logout', iconType: 'SVG', iconName: 'logout'},];
const optionsList = [{
    id: 0,
    title: 'newsLetter',
    iconType: 'Entypo',
    iconName: 'newsletter',
    rightIconType: 'switch',
    onPress: () => {
        if (config.debug) console.log('newLetter')
    }
}, {
    id: 1,
    title: 'textMessage',
    iconType: 'MaterialCommunityIcons',
    iconName: 'card',
    rightIconType: 'switch',
    onPress: () => {
        if (config.debug) console.log('textMessage')
    }
}, {
    id: 2,
    title: 'phone',
    iconType: 'MaterialIcons',
    iconName: 'phone-in-talk',
    rightIconType: 'switch',
    onPress: () => {
        if (config.debug) console.log('Phone')
    }
}, {
    id: 3,
    title: 'currency',
    iconType: 'MaterialIcons',
    iconName: 'attach-money',
    rightIconType: 'arrow',
    routeName: 'logout',
}, {
    id: 4,
    title: 'language',
    iconType: 'FontAwesome',
    iconName: 'language',
    rightIconType: 'arrow',
    routeName: 'languages'
}, {
    id: 5,
    title: 'linked',
    routeName: 'logout',
    iconType: 'Foundation',
    iconName: 'link',
    rightIconType: 'arrow',
}];
const Settings = ({navigation}: SettingsProps) => {
    const theme = useTheme();

    return (<MainLayout backHeader showBackButton noPadding bottomSpace
                        backColor={theme.settings.headerIcon}
                        onBackPress={() => navigation?.goBack()}
                        title={tr('settings.headerTitle')}
                        titleColor={theme.settings.headerTitle}><Container>
        <ProfileNameContainer onPress={() => navigation?.navigate('profileDetails')}>
            <LeftView>
                <ProfileImage source={{uri: 'https://dummyimage.com/60/cccccc/000000'}}/>
                <NameView>
                    <Name>{user.userName}</Name>
                    <JobPosition>{user.jobPosition}</JobPosition>
                </NameView>
            </LeftView>
            <Icon name={I18nManager.isRTL ? "keyboard-arrow-left" : "keyboard-arrow-right"} type={'MaterialIcons'}
                  color={theme.settings.arrowIcon}
                  size={theme.text.s3}/>
        </ProfileNameContainer>
        <ContentContainer>
            <AccountContainer>
                <Accounts>{tr('settings.accounts')}</Accounts>
                {accountsList.map((item, key) => <GenericButton key={key} title={tr('settings.' + `${item.title}`)}
                                                                titleStyle={{
                                                                    color: theme.settings.label,
                                                                    fontSize: theme.text.s7
                                                                }}
                                                                onPress={() => item.routeName === 'logout' ? setAuthStatus({logged: false}) : item.routeName === 'document' ? config.debug && console.log('fld') : navigation?.navigate(item.routeName)}
                                                                showLeftIcon
                                                                leftIconName={item.iconName}
                                                                leftIconType={item.iconType}
                                                                leftIconSize={theme.text.s5}
                                                                leftIconColor={theme.settings.itemLeftIcon}
                                                                leftIconStyle={{
                                                                    paddingLeft: 0,
                                                                }}
                                                                showRightIcon={true}
                                                                rightIconName={I18nManager.isRTL ? "keyboard-arrow-left" : "keyboard-arrow-right"}
                                                                rightIconType={'MaterialIcons'}
                                                                rightIconSize={theme.text.s3}
                                                                rightIconColor={theme.settings.arrowIcon}
                                                                containerStyle={{
                                                                    height: getByScreenSize(40, 55)
                                                                }}/>)}
            </AccountContainer>
            <Options>{tr('settings.options')}</Options>
            {optionsList.map((item, key) => <View style={{
                flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: '5%'
            }} key={key}><GenericButton title={tr('settings.' + `${item.title}`)}
                                        titleStyle={{
                                            color: theme.settings.label,
                                            fontSize: theme.text.s7
                                        }}
                                        disabled={item.rightIconType === 'switch'}
                                        onPress={item.rightIconType === 'switch' ? () => item.onPress : () => navigation?.navigate(`${item.routeName}`)
                                        }
                                        showLeftIcon
                                        leftIconName={item.iconName}
                                        leftIconType={item.iconType}
                                        leftIconSize={theme.text.s5}
                                        leftIconColor={theme.settings.itemLeftIcon}
                                        leftIconStyle={{
                                            paddingLeft: 0,
                                        }}
                                        showRightIcon={item.rightIconType === 'arrow'}
                                        rightIconName={I18nManager.isRTL ? "keyboard-arrow-left" : "keyboard-arrow-right"}
                                        rightIconType={'MaterialIcons'}
                                        rightIconSize={theme.text.s3}
                                        rightIconColor={theme.settings.arrowIcon}
                                        containerStyle={{
                                            height: getByScreenSize(40, 55),
                                            width: item.rightIconType === 'switch' ? wdp(70) : wdp(90)
                                        }}/>{item.rightIconType === 'switch' && <GenericSwitch/>}</View>)}
        </ContentContainer>
    </Container></MainLayout>);
}
export default Settings;
