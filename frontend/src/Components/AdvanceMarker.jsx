import React, { useEffect } from 'react';

const AdvancedMarker = ({ position, map }) => {
    useEffect(() => {
        if (!map) return;

        const marker = new google.maps.marker.AdvancedMarkerElement({
            position,
            map,
        });

        return () => {
            marker.setMap(null);
        };
    }, [map, position]);

    return null;
};

export default AdvancedMarker;