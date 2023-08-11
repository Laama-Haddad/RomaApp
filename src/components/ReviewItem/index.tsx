import React from 'react';
import styled from "styled-components/native";
import {ReviewItemProps} from "../../resources/interfaces/components/reviewItem";
import TextGeneric from "../TextGeneric";
import Stars from "../Stars";
import {getByScreenSize, hdp, wdp} from "../../utils/responsive";
import Ripple from 'react-native-material-ripple';

const Container = styled(Ripple)`
    background-color:transparent;
    flex-direction:row;
    padding-vertical:5%;
    padding-horizontal:1%;
    border-bottom-width:0.3px;
    border-color:${({theme}) => theme.reviewItem.border}
`;
const LeftView = styled.View`
    flex:1;
    align-items:center;
`;
const ImageView = styled.View`
    width:${getByScreenSize(wdp(12), wdp(10))}px;
    height:${getByScreenSize(wdp(12), wdp(10))}px;
    border-radius:${getByScreenSize(wdp(12), wdp(10)) / 2}px;
    justify-content:center;
    align-items:center;
`;
const OwnerImage = styled.Image`
    border-radius:${wdp(12) / 2}px;
    width: 100%;
    height: 100%;
`;
const RightView = styled.View`
    flex:6;
    margin-left:3%;
`;
const TopView = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
`;
const TitleView = styled.View``;
const Name = styled(TextGeneric)`
    color:${({theme}) => theme.reviewItem.ownerName};
    font-family:${({theme}) => theme.fonts.semi_bold}; 
    font-size:${({theme}) => theme.text.s6}px;
`;
const Date = styled(TextGeneric)`
    color:${({theme}) => theme.reviewItem.date};
    font-family:${({theme}) => theme.fonts.regular}; 
    font-size:${({theme}) => theme.text.s9}px;
`;
const CommentView = styled.View`
    padding-vertical:3%;
`;
const Comment = styled(TextGeneric)`
    color:${({theme}) => theme.reviewItem.comment};
    font-size:${({theme}) => theme.text.s8}px;
    font-family:${({theme}) => theme.fonts.regular}; 
    line-height: ${hdp(3)}px;
`;
const ReviewItem = ({
                        ownerName, ownerImageUrl, date, rating, comment, onPress, containerStyle
                    }: ReviewItemProps) => {
    return (<Container style={containerStyle} onPress={onPress}>
        <LeftView>
            <ImageView>
                <OwnerImage
                    source={{uri: !!ownerImageUrl ? ownerImageUrl : 'https://dummyimage.com/43/cccccc/999999'}}/>
            </ImageView>
        </LeftView>
        <RightView>
            <TopView>
                <TitleView>
                    <Name>{ownerName}</Name>
                    <Date>{date}</Date>
                </TitleView>
                <Stars starsCount={rating} starStyle={{marginHorizontal: '1%'}}/>
            </TopView>
            <CommentView>
                <Comment numberOfLines={4}>{comment}</Comment>
            </CommentView>
        </RightView>
    </Container>);
}
export default ReviewItem;
