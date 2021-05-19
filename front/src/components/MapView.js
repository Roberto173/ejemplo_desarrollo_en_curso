import React from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Markers from './Markers';

const MapView = () => {
    return (
        <>
        <MapContainer center={{lat: '43.44787', lng: '-3.75732'}} zoom={10}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers />

        </MapContainer>
        </>
    )
}

export default MapView;