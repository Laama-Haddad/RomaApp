import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {OrderTrackMapProps} from "../../../../resources/interfaces/screens/Order/orderTrackMap";
import styled, {useTheme} from "styled-components/native";
import MainLayout from "../../../MainLayout";
import {tr} from "../../../../resources/translations";
import BottomSheet from '@gorhom/bottom-sheet';
import TextGeneric from "../../../../components/TextGeneric";
import {Animated, View} from "react-native";
import StepsProgressBar from "../../../../components/StepsProgressBar";
import {stepsProgressData} from "../../../../resources/static/stepsProgressData";
import {getByScreenSize, hdp, wdp} from "../../../../utils/responsive";
import config from "../../../../config";
import MapView, {Marker, Polyline, Region} from "react-native-maps";
import LottieView from "lottie-react-native";
import {GeoPosition} from "react-native-geolocation-service";
import {getUserLocation, grantLocationPermissions} from "../../../../utils/permissions";
import {getDirections} from "../../../../utils/getDirections";
import { getRandomNearPoint } from "../../../../utils/getRandomNearPoint";

const Container = styled.View`
    width:${wdp(100)}px;
    height:${hdp(92)}px;
    background-color:${({theme}) => theme.orderTrackMap.background};
`;
const BottomSheetContent = styled.View`
    flex: 1;
    align-items: center;
    padding-vertical:3%
`;
const CodeContainer = styled.View`
    background-color:${({theme}) => theme.orderTrackMap.orderCodeBackground};
    border-radius:10px;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    padding-vertical:5%;
    width:90%;
`;
const Code = styled(TextGeneric)`
    color:${({theme}) => theme.orderTrackMap.label};
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
`;
const ItemsCount = styled(TextGeneric)`
    color:${({theme}) => theme.orderTrackMap.label};
    font-size:${({theme}) => theme.text.s6}px;
    font-family:${({theme}) => theme.fonts.bold};
`;
const OrderTrackMap = ({navigation, route}: OrderTrackMapProps) => {
    const {order} = route.params;
    const theme = useTheme();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => [hdp(25), hdp(75)], []);
    const mapRef = useRef<MapView | null>(null);
    const animationController = useRef(new Animated.Value(1)).current;
    const [coords, setCoords] = useState([]);
    const srcMarker = useRef<LottieView | null>(null);
    const desMarker = useRef<LottieView | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<GeoPosition | null>(null);
    const [region, setRegion] = useState<Region>({latitude: 0, longitude: 0, latitudeDelta: 0, longitudeDelta: 0});
    const [desRegion, setDesRegion] = useState<Region>({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
    });

    useEffect(() => {
        mapRef.current?.animateToRegion(region, 1000);
        const res = getRandomNearPoint(region.longitude, region.latitude);
        let tempRegion = {
            ...res,
            latitudeDelta: 2,
            longitudeDelta: 2
        }
        setDesRegion(tempRegion);
    }, [region]);

    useEffect(() => {
        getDirections(region, desRegion)
            .then(coords => setCoords(coords))
            .catch(err => config.debug && console.log("Something went wrong:", err));
    }, [region, desRegion]);

    useEffect(() => {
        (async function () {
            await grantLocationPermissions();
            const location = await getUserLocation() as GeoPosition;
            setSelectedLocation(location);
            setRegion({
                latitude: location.coords.latitude,
                latitudeDelta: 2,
                longitude: location.coords.longitude,
                longitudeDelta: 2
            });
        })()
    }, []);
    const opacity = animationController.interpolate({
        inputRange: [0, 1], outputRange: [0, 1],
    });
    const toggleContent = (to: number) => {
        if (to === 0) {
            Animated.timing(animationController, {
                duration: 100, toValue: 0, useNativeDriver: true
            }).start();
        } else {
            Animated.timing(animationController, {
                duration: 100, toValue: 1, useNativeDriver: true
            }).start();
        }
    }

    return (<MainLayout backHeader backgroundColor={theme.orderTrackMap.headerBackground} noPadding enableScroll={false}
                        backColor={theme.orderTrackMap.headerIcon} onBackPress={() => navigation?.goBack()}
                        title={tr('orderTrackMap.headerTitle')} titleColor={theme.orderTrackMap.headerTitle}
    >
        <Container>
            <MapView
                ref={mapRef}
                style={{flex: 1, height: hdp(100)}}
                minZoomLevel={16}
                initialRegion={region}
                zoomControlEnabled
                showsUserLocation
            >
                <Polyline coordinates={coords.length > 0 ? coords : [region, desRegion]}
                          strokeColor={theme.orderTrackMap.mapPath} strokeWidth={6}/>
                <Marker
                    coordinate={region}
                    title={'World Trade'}
                    description={"Center 667 Malidation"}
                />
                <Marker
                    coordinate={desRegion}
                    title={'World Trade'}
                    description={"Center 667 Malidation"}
                />
            </MapView>
            <BottomSheet
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={(index: number) => toggleContent(index)}
                style={{marginHorizontal: '5%', paddingTop: '2%'}}
                handleIndicatorStyle={{
                    backgroundColor: theme.orderTrackMap.bottomSheetIndicator,
                    width: wdp(12),
                    height: getByScreenSize(5, 7)
                }}>
                <BottomSheetContent>
                    <CodeContainer>
                        <View style={{flexDirection: 'row'}}>
                            <Code>
                                {tr('orderTrackMap.orderCode') + ":  "}
                            </Code>
                            <Code style={{color: theme.orderTrackMap.code}}>
                                #{order.orderNumber}
                            </Code>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <ItemsCount>
                                {order.numOfItems + '  ' + tr('orderTrackMap.itemsCount') + ' -'}
                            </ItemsCount>
                            <ItemsCount style={{color: theme.orderTrackMap.price}}>
                                ${order.price.toFixed(2)}
                            </ItemsCount>
                        </View>
                    </CodeContainer>
                    <Animated.View style={{opacity}}>
                        <StepsProgressBar color={theme.orderTrackMap.stepsProgress} steps={stepsProgressData}
                                          date={order.date}
                                          activeStepIndex={order.status === 'cancel' ? -1 : order.status === 'shipped' ? 2 : 4}
                                          containerStyle={{marginTop: '8%'}}/>
                    </Animated.View>
                </BottomSheetContent>
            </BottomSheet>
        </Container>
    </MainLayout>);
}
export default OrderTrackMap;
