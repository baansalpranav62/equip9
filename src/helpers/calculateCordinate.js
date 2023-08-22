export function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) *
        Math.cos(degToRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceInKm = R * c;
    const distanceInMiles = distanceInKm * 0.621;
    return { km: distanceInKm.toFixed(2), miles: distanceInMiles.toFixed(2) };
  }
  
  export function degToRad(deg) {
    return deg * (Math.PI / 180);
  }
  