import React from 'react';
import styled from "styled-components/native";
import {OfferHorizontalCardProps} from "../../resources/interfaces/components/offerHorizontalCard";
import TextGeneric from "../TextGeneric";
import {tr} from "../../resources/translations";
import {getByScreenSize} from "../../utils/responsive";
import {I18nManager, Platform, TouchableOpacity} from "react-native";

const ContainerImage = styled.ImageBackground`
    width:100%;
    height:100%;
    border-radius:15px;
    justify-content: center;
`;
const OfferView = styled.View`
    justify-content:center;
    align-items:center;
    width:${getByScreenSize(40, 30)}%;    
`;
const OfferValue = styled(TextGeneric)`
    color:${({theme}) => theme.offerHorizontalCard.text};
    font-size:${({theme}) => theme.text.s1}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
`;
const Offer = styled(TextGeneric)`
    color:${({theme}) => theme.offerHorizontalCard.text};
    font-size:${({theme}) => theme.text.s1}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    ${I18nManager.isRTL && 'margin-top:-15%'};
    ${Platform.OS === 'ios' && 'padding-top:5%'};
`;
const OfferSeparator = styled.View`
    border-color:${({theme}) => theme.offerHorizontalCard.line}; 
    border-top-width: 2px;
    height:1px;
    width:60%;
`;
const OfferHorizontalCard = ({imageUri, offerValue, containerStyle, onPress}: OfferHorizontalCardProps) => {
    return (<TouchableOpacity onPress={onPress}>
        <ContainerImage style={containerStyle}
                        source={{uri: imageUri}}
                        imageStyle={{borderRadius: 15}}
        >
            <OfferView>
                <OfferValue>{offerValue}%</OfferValue>
                <OfferSeparator/>
                <Offer>{tr('offerHorizontalCard.off')}</Offer>

            </OfferView>
        </ContainerImage>
    </TouchableOpacity>);
}
export default OfferHorizontalCard;
