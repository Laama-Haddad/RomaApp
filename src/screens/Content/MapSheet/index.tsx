import React, {useEffect, useRef, useState} from 'react';
import MainLayout from "../../MainLayout";
import styled, {useTheme} from "styled-components/native";
import MapView, {Region} from 'react-native-maps';
import {hdp} from "../../../utils/responsive";
import {View} from "react-native";
import LottieView from 'lottie-react-native';
import {getUserLocation, grantLocationPermissions} from "../../../utils/permissions";
import {tr} from "../../../resources/translations";
import {GeoPosition} from "react-native-geolocation-service";
import GenericButton from "../../../components/Button";
import {services} from "../../../api";

const ButtonView = styled.View`
    position: absolute;
    width: 100%;
    bottom: 20%;
    left: 0px;
    padding-horizontal: 3%;
`;
const MapSheet = ({navigation}) => {
    const theme = useTheme();
    const mapRef = useRef<MapView | null>(null);
    const marker = useRef<LottieView | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<GeoPosition | null>(null)
    const [region, setRegion] = useState<Region>({latitude: 0, longitude: 0, latitudeDelta: 0, longitudeDelta: 0});
    const [animationProgress, setAnimationProgress] = useState(0);
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

    useEffect(() => {
        mapRef.current?.animateToRegion(region, 1000);
    }, [region]);

    const submit = async () => {
        const location = await services.location.getLocationFromCoordinates(selectedLocation?.coords.latitude, selectedLocation?.coords.longitude);
        console.log(location);
        navigation.goBack();
    }

    return (
        <MainLayout backHeader onBackPress={() => navigation.goBack()} title={tr('chooseLocation.title')} isModal
                    noPadding enableScroll={false} titleStyle={{fontSize: theme.text.s8}}>
            <MapView
                ref={mapRef}
                style={{flex: 1, height: hdp(80)}}
                minZoomLevel={16}
                initialRegion={region}
                zoomControlEnabled
                showsUserLocation
                onRegionChange={() => {
                    if (animationProgress !== 50) {
                        setAnimationProgress(50)
                        marker.current?.play(0, 50);
                    }
                }}
                onRegionChangeComplete={(ev) => {
                    if (animationProgress === 50) {
                        marker.current?.play(60, 120);
                        setAnimationProgress(0);
                    }
                }}/>
            <View style={{
                left: '50%',
                marginLeft: -68,
                marginTop: -82,
                position: 'absolute',
                top: '50%'
            }} pointerEvents="none">
                <LottieView
                    ref={marker} style={{
                    width: 100
                    , height: 100,
                }} source={require('../../../resources/json/marker.json')} autoPlay={false} loop={false}/>
            </View>

            <ButtonView>
                <GenericButton containerStyle={{backgroundColor: theme.primary}} radius={12} title={tr('app.save')}
                               onPress={() => submit()}/>
            </ButtonView>
        </MainLayout>
    );
};

export default MapSheet;

