import http from "./http";
import config from "../config";

const location = {
    getLocationFromCoordinates: (lat: number | undefined, lng: number | undefined) => new Promise(async (resolve, reject) => {
        try {
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${lat},${lng}&key=${config.GOOGLE_API_KEY}`;
            console.log(url);
            const res = await http.get(url);
            resolve(res);
        } catch (e) {
            reject(e);
        }
    })
};


export const services = {location};
