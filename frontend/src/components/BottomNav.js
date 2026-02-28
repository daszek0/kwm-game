import React from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Map, Leaderboard } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
    const location = useLocation();

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={location.pathname}
            >
                <BottomNavigationAction label="Game" icon={<Home />} component={Link} to="/" value="/" />
                <BottomNavigationAction label="Map" icon={<Map />} component={Link} to="/map" value="/map" />
                <BottomNavigationAction label="Leaderboard" icon={<Leaderboard />} component={Link} to="/leaderboard" value="/leaderboard" />
            </BottomNavigation>
        </Paper>
    );
};

export default BottomNav;