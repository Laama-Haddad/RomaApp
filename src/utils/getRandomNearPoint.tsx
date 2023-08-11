export const getRandomNearPoint = (original_lng, original_lat, distance = 100) => {
    let r = distance / 111300 // = distance meters
        , y0 = original_lat, x0 = original_lng, u = Math.random(), v = Math.random(), w = r * Math.sqrt(u),
        t = 2 * Math.PI * v, x = w * Math.cos(t), y1 = w * Math.sin(t), x1 = x / Math.cos(y0)
    let newY = y0 + y1
    let newX = x0 + x1
    return ({
        latitude: newY, longitude: newX
    });
}
