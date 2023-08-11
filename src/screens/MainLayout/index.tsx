import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import Header from '../../components/Header';
import { tr } from '../../resources/translations';
import { Animated, KeyboardAvoidingView, Platform, } from 'react-native';
import { hdp, wdp } from '../../utils/responsive';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MainLayoutProps } from '../../resources/interfaces/screens/mainLayout';
// @ts-ignore
import CurveSvg from '../../resources/assets/curve.svg';

const Container = styled.View`
  width: 100%;
`;
const MainView = styled.View`
  padding-horizontal: 3%;
  flex-grow: 1;
  height: 100%;
  z-index: 2;
`;
const ScrollView = styled(Animated.ScrollView)`
  padding-horizontal: 3%;
  height: 100%;
  z-index: 2;
`;
const Spacer = styled.View`
  padding: ${hdp(12)}px;
`;
const BottomSpacer = styled.View`
  padding: ${hdp(7.2)}px;
`;

const Curve = styled(CurveSvg)`
   position: absolute;
   top: -1%;
   left: 0%;
`;

const MainLayout = ({
                        tabHeader = false,
                        tabPage = false,
                        cancelHeader = false,
                        backHeader = false,
                        customLeftHeader = false,
                        children,
                        enableScroll = true,
                        noPadding = false,
                        backgroundColor,
                        bottomSpace = false,
                        keyboardAvoidScrollView,
                        enableOnAndroid,
                        onScroll,
                        headerRef,
                        showCurve = false,
                        containerStyle,
                        ...props
                    }: MainLayoutProps) => {
    const PageView = enableScroll ? ScrollView : MainView;
    const theme = useTheme();
    return (<Container
        style={[{backgroundColor: backgroundColor || theme.homeBackground}, containerStyle]}>
        {showCurve && <Curve width={wdp(100)} height={hdp(35)}/>}
        {cancelHeader && (<Header
            showBackButton={false}
            showRightText
            rightText={tr('app.cancel')}
            {...props}
        />)}
        {backHeader && <Header backgroundHeader={'transparent'} showBackButton ref={headerRef} goBack {...props} />}
        {tabHeader && <Header backgroundHeader={'transparent'} showMenuButton {...props} />}
        {customLeftHeader && <Header backgroundHeader={'transparent'} {...props} />}
        <PageView style={noPadding && {paddingHorizontal: 0}} onScroll={onScroll}>
            {keyboardAvoidScrollView ? (<KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={48}
                style={{
                    flexGrow: 1, width: '100%',
                }}>
                <KeyboardAwareScrollView
                    enableOnAndroid={enableOnAndroid}
                    contentContainerStyle={{
                        flexGrow: 1,
                    }}
                    keyboardShouldPersistTaps="handled">
                    {children}
                </KeyboardAwareScrollView>
            </KeyboardAvoidingView>) : (children)}
            {tabPage && <Spacer/>}
            {bottomSpace && <BottomSpacer/>}
        </PageView>
    </Container>);
};

export default MainLayout;
