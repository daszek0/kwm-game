import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import tasks from '../mocks/tasks';
import CurrentLocationMarker from '../components/CurrentLocationMarker';

const MapView = () => {
    const position = [52.21083, 21.00000]; // Initial map center (Pola Mokotowskie)

    const createNumberedIcon = (number, completed) => {
        const backgroundColor = completed ? 'green' : 'black';
        const color = completed ? 'white' : 'white';

        return L.divIcon({
            html: `<div style="background-color: ${backgroundColor}; color: ${color}; border-radius: 50%; width: 25px; height: 25px; display: flex; justify-content: center; align-items: center; border: 1px solid black;">${number}</div>`,
            className: 'custom-div-icon',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
    };

    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={false} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CurrentLocationMarker />
            {tasks.map(task => (
                <Marker key={task.id} position={task.position} icon={createNumberedIcon(task.id, task.completed)}>
                    <Popup>
                        <h4>{task.name}</h4>
                        <p>{task.description}</p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapView;
