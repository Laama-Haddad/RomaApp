import React from 'react';
import styled from "styled-components/native";
import { BubbleMessageProps } from "../../resources/interfaces/components/bubbleMessage";
import {getByScreenSize, wdp} from "../../utils/responsive";
import TextGeneric from "../TextGeneric";

const Container = styled.View`
   flex-direction:${({type}) => type === 'sent' ? 'row-reverse' : 'row'};
   padding-vertical:1%;
`;
const ImageView = styled.View`
    padding-right:5%;
    padding-left:7%;
`;
const ProfileImage = styled.Image`
    width:${wdp(8)}px;
    height:${wdp(8)}px;
    border-radius:${wdp(8) / 2}px;
`;
const MessageContainer = styled.View`
    width:${({type}) => type === 'sent' ? wdp(70) : wdp(85)}px; 
    padding-right:${({type}) => type === 'sent' ? '7%' : '15%'};    
`;
const MessageView = styled.View`
    background-color:${({
                                                            theme,
                                                            type
                                                        }) => type === 'sent' ? theme.bubbleMessage.sentBackground : theme.bubbleMessage.receivedBackground};
    border-radius:${getByScreenSize(25,35)}px;
    padding-vertical:${getByScreenSize(35,40)}px;
    padding-horizontal:${getByScreenSize(27,27)}px;
`;
const Message = styled(TextGeneric)`
    color:${({theme, type}) => type === 'sent' ? theme.bubbleMessage.sentText : theme.bubbleMessage.receivedText};
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    line-height:${getByScreenSize(23,35)}px;
`;
const Time = styled(TextGeneric)`
    color:${({theme}) => theme.bubbleMessage.time};
    font-size:${({theme}) => theme.text.s7}px;
    font-family:${({theme}) => theme.fonts.semi_bold};
    margin-vertical:4%;
`;
const BubbleMessage = ({
                           senderProfileUrl,
                           messageText,
                           time,
                           type,
                           messageStyle,
                           messageViewStyle,
                           containerStyle
                       }: BubbleMessageProps) => {
    return (<Container type={type} style={containerStyle}>
        {type === 'received' && <ImageView>
            <ProfileImage
                source={{uri: !!senderProfileUrl ? senderProfileUrl : 'https://dummyimage.com/24/cccccc/000000'}}/>
        </ImageView>}
        <MessageContainer type={type}>
            <MessageView type={type} style={messageViewStyle}>
                <Message type={type} style={messageStyle}>{messageText}</Message>
            </MessageView>
            <Time>{time}</Time>
        </MessageContainer>
    </Container>);
}
export default BubbleMessage;

