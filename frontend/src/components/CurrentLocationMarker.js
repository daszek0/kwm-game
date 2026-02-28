import React, { useState, useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

const CurrentLocationMarker = () => {
    const [position, setPosition] = useState(null);
    const [permissionDenied, setPermissionDenied] = useState(false);
    const map = useMap();

    useEffect(() => {
        navigator.permissions.query({ name: 'geolocation' }).then((result) => {
            if (result.state === 'denied') {
                setPermissionDenied(true);
            } else {
                map.locate({ setView: true, maxZoom: 16 })
                    .on('locationfound', function (e) {
                        setPosition(e.latlng);
                    })
                    .on('locationerror', function (e) {
                        if (e.code === 1) { // PERMISSION_DENIED
                            setPermissionDenied(true);
                        }
                    });
            }
        });
    }, [map]);

    const userIcon = L.divIcon({
        html: `<div style="background-color: darkblue; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>`,
        className: 'custom-div-icon',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
    });

    if (permissionDenied) {
        return (
            <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '10px', borderRadius: '5px', zIndex: 1000 }}>
                Location access denied. Please enable it in your browser settings.
            </div>
        );
    }

    return position === null ? null : (
        <Marker position={position} icon={userIcon}>
            <Popup>You are here</Popup>
        </Marker>
    );
};

export default CurrentLocationMarker;
