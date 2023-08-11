import React, { useState } from 'react';
import { DeliveryReviewProps } from "../../../resources/interfaces/screens/deliveryReview";
import styled, { useTheme } from "styled-components/native";
import MainLayout from "../../MainLayout";
import { tr } from "../../../resources/translations";
import EmptyDeliveryReviewSvg from '../../../resources/assets/emptyDeliveryReview.svg';
import { getByScreenSize, hdp, wdp } from "../../../utils/responsive";
import TextGeneric from "../../../components/TextGeneric";
import TextInput from "../../../components/TextInput";
import GenericButton from "../../../components/Button";
import Stars from "../../../components/Stars";
import { KeyboardAvoidingView, Platform } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Container = styled.View`
    background-color:${({theme}) => theme.deliveryReview.background};
    height:${hdp(90)}px;
    align-items:center;
    padding-vertical:5%;
    padding-horizontal:5%;
`;
const ReviewContainer = styled.View`
    background-color:${({theme}) => theme.deliveryReview.reviewBackground};
    border-radius:10px;
    align-items:center;
    padding-vertical:7%;
    padding-horizontal:5%;
    margin-vertical:5%;
`;
const Title = styled(TextGeneric)`
    color:${({theme}) => theme.deliveryReview.title};
    font-size:${({theme}) => theme.text.s5}px;
    font-family:${({theme}) => theme.fonts.bold};
    text-align:center;
`;
const Info = styled(TextGeneric)`
    color:${({theme}) => theme.deliveryReview.info};
    font-size:${({theme}) => theme.text.s8}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    text-align:center;
    margin-vertical:5%;
    line-height:${hdp(3)}px;
`;

const DeliveryReview = ({navigation}: DeliveryReviewProps) => {
    const theme = useTheme();
    const [note, setNote] = useState('');
    const submit = () => {
    }
    return (<KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={48}
        style={{
            flexGrow: 1, width: '100%', height: '100%', backgroundColor: theme.deliveryReview.background
        }}>
        <KeyboardAwareScrollView
            enableOnAndroid
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
            <MainLayout backHeader showBackButton noPadding enableScroll={false}
                        backColor={theme.deliveryReview.headerIcon}
                        onBackPress={() => navigation?.goBack()}
                        title={tr('deliveryReview.headerTitle')}
                        titleColor={theme.deliveryReview.headerTitle}>
                <Container>
                    <EmptyDeliveryReviewSvg width={wdp(90)} height={hdp(32)}/>
                    <ReviewContainer>
                        <Title>{tr('deliveryReview.title')}</Title>
                        <Stars
                            emptyStarName={'star'}
                            fullStarName={'star'}
                            halfStarName={'star-half'}
                            iconSet={'FontAwesome'}
                            disable={false}
                            emptyStarColor={theme.deliveryReview.emptyStar}
                            fullStarColor={theme.deliveryReview.fullStar}
                            starSize={theme.text.s2}
                            containerStyle={{marginTop: '5%'}}
                            starStyle={{marginHorizontal: '3%'}}
                        />
                        <Info>{tr('deliveryReview.info')}</Info>
                        <TextInput placeholder={tr('deliveryReview.inputPlaceHolder')}
                                   placeholderTextColor={theme.deliveryReview.inputPlaceHolder}
                                   value={note}
                                   onChangeText={text => setNote(text)}
                                   maxLength={50}
                                   multiline
                                   inputStyle={{
                                       textAlignVertical: 'top',
                                       borderRadius: 10,
                                       height: hdp(12),
                                       paddingVertical: getByScreenSize(10, 15),
                                       paddingHorizontal: '5%',
                                       fontSize: theme.text.s8
                                   }}
                        />
                        <GenericButton title={tr('deliveryReview.submitTitle')}
                                       onPress={() => !!note && submit()}
                                       disabled={!note}
                                       containerStyle={{
                                           backgroundColor: theme.deliveryReview.submitBackground,
                                           width: wdp(80),
                                           marginTop: '5%'
                                       }}
                                       titleStyle={{
                                           color: theme.deliveryReview.submitTitle, fontSize: theme.text.s7
                                       }}/>
                    </ReviewContainer>
                </Container>
            </MainLayout>
        </KeyboardAwareScrollView>
    </KeyboardAvoidingView>);
}
export default DeliveryReview;
