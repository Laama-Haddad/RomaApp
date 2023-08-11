/* eslint-disable import/prefer-default-export */
import {Platform, PermissionsAndroid} from "react-native";
import Geolocation, {GeoPosition} from "react-native-geolocation-service";

export const grantLocationPermissions = async () => {
    /**
     * This function grant GeoLocation Permission for Android and IOS
     */
    if (Platform.OS === "android") {
        await PermissionsAndroid.requestMultiple(
            [
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            ]
        );
    } else {
        await Geolocation.requestAuthorization("whenInUse");
    }
};

export const getUserLocation = async () =>
    new Promise((resolve, reject) => {
        const config = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 3600000,
        };
        Geolocation.getCurrentPosition(
            (res) => resolve(res),
            (err) => reject(err),
            config
        );
    });


