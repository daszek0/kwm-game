import { Box, Grid, Typography, LinearProgress, IconButton } from '@mui/material';
import { Games } from '@mui/icons-material';

function GameInfoBox({ timeLeft, tasksCompleted, totalTasks, rank, points, progress}) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <Box
            sx={{
                width: 400,
                bgcolor: '#36454F',
                color: 'white',
                borderRadius: 2,
                p: 2,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                    <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        KWM Game
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'lightgray' }}>
                        {timeLeft}
                    </Typography>
                </Box>
                <IconButton sx={{ bgcolor: 'rgba(0,0,0,0.2)' }}>
                    {/* Placeholder for game controller icon */}
                    <Games sx={{ color: 'white' }} />
                </IconButton>
            </Box>
            <Grid container spacing={2} sx={{ my: 2, textAlign: 'center' }}>
                <Grid item xs={4}>
                    <Typography variant="subtitle2" sx={{ color: 'lightgray' }}>
                        TASKS
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {tasksCompleted}/{totalTasks}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle2" sx={{ color: 'lightgray' }}>
                        RANK
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ADD8E6' }}>
                        {rank}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle2" sx={{ color: 'lightgray' }}>
                        POINTS
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {points}
                    </Typography>
                </Grid>
            </Grid>
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    height: 10,
                    borderRadius: 5,
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: '#ADD8E6',
                    },
                    backgroundColor: 'rgba(0,0,0,0.3)',
                }} />
        </Box>
    </Box>;
}
export default GameInfoBox;