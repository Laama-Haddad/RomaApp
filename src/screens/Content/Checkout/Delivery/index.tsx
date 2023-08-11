import React, { useEffect, useState } from 'react';
import styled from "styled-components/native";
import { DeliveryProps } from "../../../../resources/interfaces/screens/delivery";
import { tr } from "../../../../resources/translations";
import { hdp, wdp } from "../../../../utils/responsive";
import { FlatList } from "react-native";
import TextGeneric from "../../../../components/TextGeneric";
import { deliveryWaysList } from "../../../../resources/static/deliveryWays";
import { getByLanguage } from "../../../../utils/langFuncs";

const Container = styled.View`
    background-color:${({theme}) => theme.delivery.background};
    align-items:center;
`;
const DeliveryWayContainer = styled.TouchableOpacity`
    width:${wdp(90)}px;
    height:${hdp(13)}px;
    border-radius:12px;
    background-color:${({theme}) => theme.delivery.deliveryWayBackground};
    margin-vertical:2%;
    padding-horizontal:8%;
    padding-vertical:5%;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;
const WayView = styled.View``;
const Way = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s8}px;
    color:${({theme}) => theme.delivery.way};
    font-family:${({theme}) => theme.fonts.bold};
`;
const Period = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s8}px;
    color:${({theme}) => theme.delivery.period};
    font-family:${({theme}) => theme.fonts.semi_bold};
`;
const WayIcon = styled.View`
    width:${wdp(8)}px;
    height:${wdp(8)}px;
    border-radius:${wdp(8) / 2}px;
    border-width:${({selectedDeliveryWayIndex, currentIndex}) => currentIndex === selectedDeliveryWayIndex ? 0 : 2}px;
    border-color:${({theme}) => theme.delivery.unSelectedIconBorder};
    background-color:${({
                                                                                                                                                                                                                                                                                                                     theme,
                                                                                                                                                                                                                                                                                                                     selectedDeliveryWayIndex,
                                                                                                                                                                                                                                                                                                                     currentIndex
                                                                                                                                                                                                                                                                                                                 }) => currentIndex === selectedDeliveryWayIndex ? theme.delivery.selectedIcon : 'transparent'}
`;
const Info = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s8}px;
    color:${({theme}) => theme.delivery.info};
    font-family:${({theme}) => theme.fonts.semi_bold};
    width:70%;
    text-align:center;
`;
const Delivery = ({onToggleStep}: DeliveryProps) => {
    useEffect(() => {
        !!onToggleStep && onToggleStep({headerTitle: tr('delivery.headerTitle')})
    }, [])
    const [selectedDeliveryWayIndex, setSelectedDeliveryWayIndex] = useState(0);
    const renderItem = ({item, index}) => {
        return (
            <DeliveryWayContainer onPress={() => setSelectedDeliveryWayIndex(index)}>
                <WayView>
                    <Way>{item[getByLanguage('way')]}</Way>
                    <Period>{item[getByLanguage('period')]}</Period>
                </WayView>
                <WayIcon selectedDeliveryWayIndex={selectedDeliveryWayIndex} currentIndex={index}/>
            </DeliveryWayContainer>
        );
    }
    return (
        <Container>
            <FlatList pagingEnabled
                      decelerationRate={0}
                      disableIntervalMomentum={true}
                      snapToInterval={wdp(80)}
                      data={deliveryWaysList} renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}
                      ListFooterComponent={() => <Info>{tr('delivery.info')}</Info>}
                      ListFooterComponentStyle={{
                          marginVertical: hdp(10),
                          alignItems: 'center',
                          justifyContent: 'center'
                      }}
            />
        </Container>
    );
}
export default Delivery;
