import React from 'react';
 import './Logn.css'
  import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Sign from './Sign';
import Rigester from './Rigester';

export default function LabTabs() {
  // const [state,dispatch] = useStateValue()

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

return (
   //  <Box sx={{ width: '50%', typography: 'body1' }}>
  
   <div className="boxes">
    
          

      <div className="round-box">
      <TabContext value={value}>
         {/* <Box sx={{ borderBottom: 1, borderColor: 'divider',color: "red" }}>  */}
       <div className='hik'>
          <TabList className='hikn'  onChange={handleChange} aria-label="lab API tabs example">
            <Tab  label="LOGIN" value="1" />
            <Tab label="REGISTERATION" value="2" />
      
          </TabList>
          </div>
       {/* </Box>  */}
        <TabPanel value="1">
               <div className='login'>
                <Sign/>
               </div>
           </TabPanel>


        <TabPanel value="2">
        <div className='register'>
                 <Rigester/>
               </div>
           </TabPanel>
       
      </TabContext>
      </div>
      </div>
   //  </Box>
  );
}

