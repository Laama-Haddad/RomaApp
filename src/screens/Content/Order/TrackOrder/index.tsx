import React from 'react';
import { TrackOrderProps } from "../../../../resources/interfaces/screens/Order/trackOrder";
import styled, { useTheme } from "styled-components/native";
import MainLayout from "../../../MainLayout";
import { tr } from "../../../../resources/translations";
import TextGeneric from "../../../../components/TextGeneric";
import { hdp, wdp } from "../../../../utils/responsive";
import { View } from "react-native";
import GenericButton from "../../../../components/Button";
import StepsProgressBar from "../../../../components/StepsProgressBar";
import { stepsProgressData } from "../../../../resources/static/stepsProgressData";

const Container = styled.View`
    background-color:${({theme}) => theme.trackOrder.background};
    height:${hdp(92)}px;
    padding:5%;
    align-items:center;
`;
const ContentContainer = styled.View`
    background-color:${({theme}) => theme.trackOrder.contentBackground};
    border-radius:10px;
    padding-horizontal:5%;
    padding-top:7%;
    width:100%;
`;
const CodeContainer = styled.View`
    background-color:${({theme}) => theme.trackOrder.orderCodeBackground};
    border-radius:10px;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    padding-vertical:5%;
`;
const Code = styled(TextGeneric)`
    color:${({theme}) => theme.trackOrder.label};
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
`;
const ItemsCount = styled(TextGeneric)`
    color:${({theme}) => theme.trackOrder.label};
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
`;
const TrackOrder = ({navigation, route}: TrackOrderProps) => {
    const theme = useTheme();
    const {order} = route.params;
    return (<MainLayout backHeader noPadding backgroundColor={theme.trackOrder.headerBackground}
                        backColor={theme.trackOrder.headerIcon} onBackPress={() => navigation?.goBack()}
                        title={tr('trackOrder.headerTitle')} titleColor={theme.trackOrder.headerTitle}
                        showRightIcon rightIconName={'map'} rightIconType={'Feather'}
                        rightIconColor={theme.trackOrder.headerIcon} rightIconSize={theme.text.s4}
                        onRightPress={() => navigation?.navigate('orderTrackMap', {order: order})}>
            <Container>
                <ContentContainer>
                    <CodeContainer>
                        <View style={{flexDirection: 'row'}}>
                            <Code>
                                {tr('trackOrder.orderCode') + ":  "}
                            </Code>
                            <Code style={{color: theme.trackOrder.code}}>
                                #{order.orderNumber}
                            </Code>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <ItemsCount>
                                {order.numOfItems + '  ' + tr('trackOrder.itemsCount') + ' -'}
                            </ItemsCount>
                            <ItemsCount style={{color: theme.trackOrder.price}}>
                                ${order.price.toFixed(2)}
                            </ItemsCount>
                        </View>
                    </CodeContainer>
                    <StepsProgressBar steps={stepsProgressData} date={order.date}
                                      activeStepIndex={order.status === 'cancel' ? -1 : order.status === 'shipped' ? 2 : 4}
                                      containerStyle={{marginTop: '10%'}}/>
                </ContentContainer>
                <GenericButton title={tr('trackOrder.buttonTitle')}
                               titleStyle={{color: theme.trackOrder.buttonTitle}}
                               containerStyle={{
                                   backgroundColor: theme.trackOrder.buttonBackground,
                                   width: wdp(80),
                                   marginVertical: '5%'
                               }} onPress={() => navigation?.navigate('Home')}/>
            </Container>
        </MainLayout>
    );
}
export default TrackOrder;
