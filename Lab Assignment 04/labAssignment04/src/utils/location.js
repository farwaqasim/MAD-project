import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';


export const requestLocationPermission = async () => {
if (Platform.OS === 'android') {
const granted = await PermissionsAndroid.request(
PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
);
return granted === PermissionsAndroid.RESULTS.GRANTED;
}
return true;
};


export const getCurrentLocation = (success) => {
Geolocation.getCurrentPosition(
position => success(position.coords),
error => console.log(error),
{ enableHighAccuracy: true, timeout: 15000 }
);
};