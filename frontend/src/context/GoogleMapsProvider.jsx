import React from 'react';
import { LoadScript } from '@react-google-maps/api';

const GoogleMapsProvider = ({ children }) => {
    console.log(import.meta.env.VITE_GOOGLE_MAPS_API);
    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
            {children}
        </LoadScript>
    );
};

export default GoogleMapsProvider;