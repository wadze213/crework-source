import React from 'react'
import TalentCard from './TalentCard'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TalentPool = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <div className='talentpool-container'>
        <p>A crew of the best remote talent around.</p>
        <h2>Connecting oustanding <br></br> remote talent with the most <br></br> innovative companies</h2>

        <div className='featured-talent-container'>
            <h3>Our talent pool</h3>
            <div style={{padding: "50px"}}></div>
            <TalentCard/>
        </div>
      
    </div>
  )
}

export default TalentPool
