import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import UserMarker from '../components/UserMarker';
import { requestLocationPermission, getCurrentLocation } from '../utils/location';


export default function MapScreen() {
const [region, setRegion] = useState(null);


useEffect(() => {
async function init() {
const granted = await requestLocationPermission();
if (granted) {
getCurrentLocation(coords => {
setRegion({
latitude: coords.latitude,
longitude: coords.longitude,
latitudeDelta: 0.01,
longitudeDelta: 0.01,
});
});
}
}
init();
}, []);


if (!region) return null;


return (
<View style={styles.container}>
<MapView style={styles.map} region={region}>
<UserMarker
coordinate={region}
onDragEnd={e => setRegion({
...region,
...e.nativeEvent.coordinate
})}
/>
</MapView>
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1 },
map: { flex: 1 }
});