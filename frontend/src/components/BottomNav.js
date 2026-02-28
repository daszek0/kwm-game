import React from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Map, Leaderboard } from '@mui/icons-material';

const BottomNav = ({ value, onChange }) => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    onChange(newValue);
                }}
            >
                <BottomNavigationAction label="Game" icon={<Home />} />
                <BottomNavigationAction label="Map" icon={<Map />} />
                <BottomNavigationAction label="Leaderboard" icon={<Leaderboard />} />
            </BottomNavigation>
        </Paper>
    );
};

export default BottomNav;