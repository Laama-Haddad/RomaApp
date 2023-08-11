import config from "../config";
import { decode } from "@mapbox/polyline";

export const getDirections = async (startLoc, destinationLoc) => {
    try {
        const KEY = config.GOOGLE_API_KEY;
        let resp = await fetch(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
        );
        let respJson = await resp.json();

        let points = decode(respJson.routes[0].overview_polyline.points);
        let coords = points.map((point, index) => {
            return {
                latitude: point[0],
                longitude: point[1]
            };
        });
        return coords;
    } catch (error) {
        return error;
    }
};
