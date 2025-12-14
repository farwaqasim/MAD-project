import React from 'react';
import { Marker, Callout, Circle, Polyline } from 'react-native-maps';
import { View, Text } from 'react-native';


export default function UserMarker({ coordinate, onDragEnd }) {
return (
<>
<Marker
draggable
coordinate={coordinate}
onDragEnd={onDragEnd}
>
<Callout>
<View>
<Text>Name: Pakeeza Gul</Text>
<Text>Reg No: 2021-CS-XXX</Text>
</View>
</Callout>
</Marker>


<Circle
center={coordinate}
radius={50}
strokeColor="blue"
fillColor="rgba(0,0,255,0.2)"
/>


<Polyline
coordinates={[
coordinate,
{ latitude: coordinate.latitude + 0.0003, longitude: coordinate.longitude }
]}
strokeWidth={2}
strokeColor="red"
/>
</>
);
}