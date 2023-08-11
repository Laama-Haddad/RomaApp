import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { CommonActions, DrawerActions, useLinkBuilder } from '@react-navigation/native';
import styled, { useTheme } from 'styled-components/native';
import { hdp, wdp } from "../utils/responsive";
import TextGeneric from "../components/TextGeneric";
import { user } from '../resources/static/user';
import { Image, Platform, StatusBar, View } from 'react-native';
import { setAuthStatus } from "../screens/Auth/SignInWithEmail/action";
import { RootState } from "../redux/store";
import { connect } from "react-redux";
import { ToggleAuth } from "../utils/authFuncs";

const ContainerView = styled.View`
    flex:1;
    background-color:${({theme}) => theme.drawer.background};
    padding-top:${Platform.OS === 'android' ? StatusBar.currentHeight : 55}px;
`;
const Header = styled.View`
    height:${hdp(20)}px;
    width:100%;
    justify-content:center;
    align-items:center;
`;
const ImageView = styled.View`
    width:${wdp(20)}px;
    height:${wdp(20)}px;
    background-color:${({theme}) => theme.drawer.profileImageBackground};
    border-radius:${wdp(20) / 2}px;
    justify-content:center;
    align-items:center;  
`;
const ProfileName = styled(TextGeneric)`
    font-family:${({theme}) => theme.fonts.bold}
    font-size:${({theme}) => theme.text.s7}px;
    font-weight:bold;
    color:${({theme}) => theme.drawer.profileName};
    margin-top:5%;
`;
const CustomDrawer = props => {
    const {state, descriptors, navigation} = props;
    const buildLink = useLinkBuilder();
    const theme = useTheme();
    return (<ContainerView>
        <Header>
            <ImageView>
                <Image source={{uri: "https://i.ibb.co/NsB5PDX/profile.png"}}
                       style={{width: wdp(10), height: wdp(10)}}/>
            </ImageView>
            <ProfileName>{user?.userName}</ProfileName>
        </Header>
        <View style={{
            backgroundColor: theme.drawer.itemsBackground,
            height: hdp(80),
            borderTopWidth: 0.2,
            borderColor: theme.drawer.item,
        }}>
            {state.routes.map((route, i) => {
                const isHidden = descriptors[route.key].options?.hidden;
                if (isHidden === true) return null;
                const focused = i === state.index;
                const {
                    title,
                    drawerLabel,
                    drawerIcon,
                    drawerLabelStyle,
                    drawerItemStyle,
                    drawerActiveBackgroundColor,
                    drawerActiveTintColor,
                    drawerInactiveTintColor,
                    pressColor
                } = descriptors[route.key].options;
                return (<View style={{
                    flexDirection: "row", borderBottomWidth: 0.2, borderColor: theme.drawer.item,
                }}
                              key={route.key}>
                    <View style={{
                        borderColor: focused ? theme.drawer.activeItem : theme.drawer.background,
                        borderWidth: 5,
                        marginVertical: '1%',
                    }}/>
                    <DrawerItem
                        label={drawerLabel !== undefined ? drawerLabel : title !== undefined ? title : route.name}
                        icon={() => drawerIcon(theme.drawer.item, theme.text.s7)}
                        focused={focused}
                        activeTintColor={drawerActiveTintColor}
                        inactiveTintColor={drawerInactiveTintColor}
                        activeBackgroundColor={drawerActiveBackgroundColor}
                        pressColor={pressColor}
                        labelStyle={drawerLabelStyle}
                        style={drawerItemStyle}
                        to={buildLink(route.name, route.params)}
                        onPress={() => {
                            if (route.name === 'logout') ToggleAuth({logged: false}).then();
                            else navigation.dispatch({
                                ...(focused ? DrawerActions.closeDrawer() : CommonActions.navigate(route.name)),
                                target: state.key,
                            });
                        }}
                    /></View>);
            })}
        </View>
    </ContainerView>);
};
const mapStateToProps = (state: RootState) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, {setAuthStatus})(CustomDrawer);
