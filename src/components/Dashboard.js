import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
  
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  function valuetext(value) {
    return `${value}°C`;
  }

  const card1 = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Online Mode
        </Typography>
        <Typography variant="body2">
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch {...label} />
      </CardActions>
    </React.Fragment>
  );

  const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Master Volume
        </Typography>
        <Typography variant="body2">
          Overrides all other sound settings in this application
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Temperature"
                defaultValue={30}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={110}
            />
        </Box>
      </CardActions>
    </React.Fragment>
  );

  const card3 = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Sound Quality
        </Typography>
        <Typography variant="body2">
          Manually control the music quality in event of poor connection
        </Typography>
      </CardContent>
      <CardActions>
        <Switch {...label} />
      </CardActions>
    </React.Fragment>
  );

  function Dashboard() {
    return (
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card1}</Card>
      </Box>
    );
  }

  export default Dashboard;