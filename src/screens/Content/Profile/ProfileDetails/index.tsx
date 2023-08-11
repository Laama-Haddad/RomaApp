import React, { useEffect, useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import { ProfileDetailsProps } from "../../../../resources/interfaces/screens/profileDetails";
import MainLayout from "../../../MainLayout";
import { tr } from "../../../../resources/translations";
import { KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { user } from "../../../../resources/static/user";
import Icon from "../../../../components/Icon";
import { getByScreenSize, hdp, wdp } from "../../../../utils/responsive";
import TextGeneric from "../../../../components/TextGeneric";
import TextInput from "../../../../components/TextInput";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import GenericButton from "../../../../components/Button";

const Container = styled.View`
    background-color:${({theme}) => theme.profileDetails.background};
    padding:5%;
    height:${hdp(92)}px;
`;
const ContentContainer = styled.View`
    background-color:${({theme}) => theme.profileDetails.contentBackground};
    border-radius:15px;
    width:${wdp(90)}px;
    align-items:center;
    padding-horizontal:5%;
    padding-vertical:7%;
`;
const ProfileImage = styled.Image`
    width:${wdp(28)}px;
    height:${wdp(28)}px;
    border-radius:${wdp(28) / 2}px;
`;
const Name = styled(TextGeneric)`
    color:${({theme}) => theme.profileDetails.label};
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    font-weight:${Platform.OS === 'ios' ? '500' : 'bold'};
    padding-top: 4%;
    padding-bottom: 2%;
`;
const CreditView = styled.View`
    flex-direction:row;
    margin-bottom:5%;
`;
const Credit = styled(TextGeneric)`
    color:${({theme}) => theme.profileDetails.creditAmount};
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
`;
const mandatoryFields = ['username', 'phone', 'email', 'address'];
const ProfileDetails = ({navigation}: ProfileDetailsProps) => {

    const theme = useTheme();
    const [form, updateForm] = useState({
        username: user && user.userName,
        phone: user && user.phone,
        email: user && user.email,
        address: user && user.address
    });
    const [formComplete, setFormComplete] = useState(false);

    const [editable, setEditable] = useState(false);

    const handleChange = (key, value) => {
        updateForm({
            ...form, [key]: value,
        });
    };
    useEffect(() => {
        let _formComplete = true;
        for (let index = 0; index < mandatoryFields.length; index++) {
            const field = mandatoryFields[index];
            if (!form[field] || form[field].length <= 0) {
                setFormComplete(false);
                _formComplete = false;
                break;
            }
        }
        if (_formComplete) setFormComplete(true);
    }, [form]);
    const submit = async () => {
        setEditable(false);
        navigation?.goBack();
    };
    return (<KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={48}
        style={{
            flexGrow: 1, width: '100%', height: '100%', backgroundColor: theme.profileDetails.background
        }}>
        <KeyboardAwareScrollView
            enableOnAndroid
            contentContainerStyle={{flexGrow: 1, backgroundColor: theme.profileDetails.background}}
            keyboardShouldPersistTaps="handled"><MainLayout backHeader showBackButton noPadding
                                                            backgroundColor={theme.profileDetails.headerBackground}
                                                            title={tr('profileDetails.headerTitle')}
                                                            titleColor={theme.profileDetails.headerTitle}
                                                            backColor={theme.profileDetails.headerIcon}
                                                            onBackPress={() => navigation?.goBack()}>
            <Container>
                <ContentContainer>
                    <TouchableOpacity onPress={() => navigation?.navigate('profileDetails')}>
                        <ProfileImage
                            source={{uri: !!user.profileImage ? user.profileImage : 'https://dummyimage.com/80/cccccc/000000'}}/>
                        {!user.profileImage && <Icon name={'edit'} type={'MaterialIcons'} color={theme.profile.editIcon}
                                                     size={theme.text.s10}
                                                     role={'button'} onPress={() => {
                        }} disabled
                                                     style={{
                                                         backgroundColor: theme.profile.editIconBackground,
                                                         width: wdp(5),
                                                         height: wdp(5),
                                                         position: 'absolute',
                                                         right: wdp(1),
                                                         bottom: wdp(1)
                                                     }}/>}
                    </TouchableOpacity>
                    <Name>{user.userName}</Name>
                    <CreditView>
                        <Credit style={{color: theme.profileDetails.label}}>{tr('profileDetails.credit')}: </Credit>
                        <Credit style={{color: theme.profileDetails.creditAmount}}>${user.balance.toFixed(2)}</Credit>
                    </CreditView>
                    <TextInput placeholder={tr('profileDetails.userNamePlaceHolder')}
                               placeholderTextColor={theme.profileDetails.inputPlaceHolder}
                               value={form.username}
                               onChangeText={text => handleChange('username', text)}
                               containerStyle={{marginTop: '5%'}}
                               editable={editable}
                               showRightIcon
                               rightIconName={'edit'}
                               rightIconType={'MaterialIcons'}
                               rightIconColor={editable ? theme.profileDetails.activeEditIcon : theme.profileDetails.editIcon}
                               rightIconSize={theme.text.s5}
                               onRightIconPress={() => setEditable(!editable)}
                    />
                    <TextInput placeholder={tr('profileDetails.phonePlaceHolder')}
                               placeholderTextColor={theme.profileDetails.inputPlaceHolder}
                               value={form.phone}
                               onChangeText={text => handleChange('phone', text)}
                               containerStyle={{marginTop: '5%'}}
                               editable={editable}
                               showRightIcon
                               rightIconName={'edit'}
                               rightIconType={'MaterialIcons'}
                               rightIconColor={editable ? theme.profileDetails.activeEditIcon : theme.profileDetails.editIcon}
                               rightIconSize={theme.text.s5}
                               onRightIconPress={() => setEditable(!editable)}
                    />
                    <TextInput placeholder={tr('profileDetails.emailPlaceHolder')}
                               placeholderTextColor={theme.profileDetails.inputPlaceHolder}
                               value={form.email}
                               onChangeText={text => handleChange('email', text)}
                               containerStyle={{marginTop: '5%'}}
                               editable={editable}
                               showRightIcon
                               rightIconName={'edit'}
                               rightIconType={'MaterialIcons'}
                               rightIconColor={editable ? theme.profileDetails.activeEditIcon : theme.profileDetails.editIcon}
                               rightIconSize={theme.text.s5}
                               onRightIconPress={() => setEditable(!editable)}
                    />
                    <TextInput placeholder={tr('profileDetails.addressPlaceHolder')}
                               placeholderTextColor={theme.profileDetails.inputPlaceHolder}
                               value={form.address}
                               onChangeText={text => handleChange('address', text)}
                               containerStyle={{marginTop: '5%'}}
                               editable={editable}
                               inputStyle={{
                                   textAlignVertical: 'top',
                                   borderRadius: 20,
                                   height: hdp(8),
                                   paddingVertical: getByScreenSize(10, 15),
                                   paddingHorizontal: '5%',
                                   fontSize: theme.text.s8
                               }}
                               multiline
                               showRightIcon
                               rightIconName={'edit'}
                               rightIconType={'MaterialIcons'}
                               rightIconColor={editable ? theme.profileDetails.activeEditIcon : theme.profileDetails.editIcon}
                               rightIconSize={theme.text.s5}
                               onRightIconPress={() => setEditable(!editable)}
                    />
                    <GenericButton title={tr('profileDetails.submitTitle')}
                                   onPress={() => (formComplete || editable) && submit()}
                                   disabled={!editable || !formComplete}
                                   containerStyle={{
                                       backgroundColor: theme.profileDetails.submitBackground,
                                       width: '100%',
                                       marginTop: '6%'
                                   }}
                                   titleStyle={{
                                       color: theme.profileDetails.submitTitle, fontSize: theme.text.s7
                                   }}/>
                </ContentContainer>
            </Container></MainLayout>
        </KeyboardAwareScrollView>
    </KeyboardAvoidingView>);
}
export default ProfileDetails;
