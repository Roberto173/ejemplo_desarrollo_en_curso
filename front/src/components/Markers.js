import React from 'react';
import {Marker, Popup} from 'react-leaflet';

import {IconLocation} from './VenueLocationIcon';

const Markers = () => {
    return (
        <Marker position={{lat:'43.46202', lng:'-3.80119'}} icon={IconLocation}>
            <Popup>
                Hola, esta es mi posición actual
            </Popup>
        </Marker>
    )
}

export default Markers;