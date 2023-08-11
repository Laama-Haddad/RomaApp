import React, { useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import { SightPowerProps } from "../../../resources/interfaces/screens/sightPower";
import MainLayout from "../../MainLayout";
import { tr } from "../../../resources/translations";
import TextGeneric from "../../../components/TextGeneric";
import { hdp, wdp } from "../../../utils/responsive";
import { FlatList } from "react-native";
import GenericButton from "../../../components/Button";
import Icon from "../../../components/Icon";

const Container = styled.View`
    background-color:${({theme}) => theme.sightPower.background};
    height:${hdp(92)}px;
    align-items:center;
    padding-vertical:3%;
    padding-horizontal:5%;
`;
const TitleContainer = styled.View`
    background-color:${({theme}) => theme.sightPower.titleBackground + '44'};
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    width:${wdp(90)}px;
    border-radius:15px;
    padding-vertical:2%; 
`;
const ValueContainer = styled.View`
    flex-direction:row;
    width:${wdp(90)}px;
`;
const Title = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s5}px;
    color:${({theme}) => theme.sightPower.title};
    font-family:${({theme}) => theme.fonts.bold};
`;
const Degree = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s6}px;
    color:${({theme}) => theme.sightPower.value};
    font-family:${({theme}) => theme.fonts.bold};
    text-align:center;
    margin-vertical:1%;
    margin-right:3%;
`;
const IconView = styled.View`
    width:${wdp(5)}px;
`;
const DegreeTouchable = styled.TouchableOpacity`
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding-vertical:1%;
`;
const Separator = styled.View`
    position:absolute;
    top:${-hdp(7)}px;
    left:50%;
    border-left-width:0.7px;
    border-right-width:0.7px;
    border-color:${({theme}) => theme.sightPower.separator};
    height:${hdp(65)}px;
    width:${wdp(1.5)}px;
`;
const eyeDegrees = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const SightPower = ({route, navigation}: SightPowerProps) => {
    const {onToggleValues} = route.params;
    const theme = useTheme();
    const [selectedLeftIndex, setSelectedLeftIndex] = useState(0);
    const [selectedRightIndex, setSelectedRightIndex] = useState(0);
    const renderDegree = (item, index, type) => {
        return (<DegreeTouchable onPress={() => {
            if (type === 'left') {
                setSelectedLeftIndex(index);
            } else {
                setSelectedRightIndex(index);
            }
        }}>
            <Degree>{item.toFixed(2)}</Degree>
            <IconView>
                {(type === 'left' && selectedLeftIndex === index) &&
                    <Icon name={'check-square'} type={'Feather'} color={theme.sightPower.checkIcon}
                          size={theme.text.s7}/>}
                {(type === 'right' && selectedRightIndex === index) &&
                    <Icon name={'check-square'} type={'Feather'} color={theme.sightPower.checkIcon}
                          size={theme.text.s7}/>}
            </IconView>
        </DegreeTouchable>);
    }
    return (<MainLayout backHeader showBackButton noPadding backgroundColor={theme.sightPower.headerBackground}
                        enableScroll={false}
                        backColor={theme.sightPower.headerIcon} onBackPress={() => {
        onToggleValues({
            leftDegree: 0, rightDegree: 0
        });
        navigation?.goBack()
    }}
                        title={tr("sightPower.headerTitle")} titleColor={theme.sightPower.headerTitle}>
        <Container>
            <TitleContainer>
                <Title>{tr('sightPower.leftEye')}</Title>
                <Title>{tr('sightPower.rightEye')}</Title>
            </TitleContainer>
            <ValueContainer>
                <FlatList data={eyeDegrees} renderItem={({item, index}) => renderDegree(item, index, "left")}
                          keyExtractor={(item) => item.toString()}/>
                <Separator/>
                <FlatList data={eyeDegrees} renderItem={({item, index}) => renderDegree(item, index, "right")}
                          keyExtractor={(item) => item.toString()}/>
            </ValueContainer>
            <GenericButton title={tr('sightPower.submitTitle')}
                           titleStyle={{color: theme.sightPower.submitTitle}} onPress={() => {
                onToggleValues({
                    leftDegree: eyeDegrees[selectedLeftIndex], rightDegree: eyeDegrees[selectedRightIndex]
                });
                navigation?.goBack();
            }}
                           disabled={!selectedRightIndex && !selectedLeftIndex}
                           containerStyle={{
                               width: wdp(90),
                               backgroundColor: theme.sightPower.submitBackground,
                               marginBottom: '5%',
                               marginTop: '30%'
                           }}/>
        </Container>
    </MainLayout>);
}
export default SightPower;
