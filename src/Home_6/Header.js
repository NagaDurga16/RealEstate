import * as React from 'react';
import { Box, Button, ButtonGroup, Grid, Tab, Tabs, TextField, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Grid  style={{
        backgroundImage: `url(hbg.jpeg)`,
        backgroundRepeat: "no-repeat",
        height:"700px",
        padding:"100px"
      }}>
      <div
       
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img src="home.png" />
          </div>

          <p style={{ color: "white" }}>Home -</p>
          <p style={{ color: "white" }}>Listings -</p>
          <p style={{ color: "white" }}>Members -</p>
          <p style={{ color: "white" }}>Blogs -</p>
          <p style={{ color: "white" }}>Pages -</p>

          <div style={{ display: "flex" }}>
            <p>
              <AccountCircleOutlinedIcon style={{ fill: "white" }} />
            </p>
            <p style={{ color: "white" }}>Login/Register</p>
          </div>
          <div>
            <Button
              style={{
                border: "1px solid white",
                borderRadius: "5%",
                color: "white",
              }}
            >
              Add Property
            </Button>
          </div>
        </div>
      </div>
      <div>
        <h2 style={{color:"white"}}>Find the perfect place to</h2>
        <h2 style={{color:"white"}}>Live with your family</h2>
        <p style={{color:"whitesmoke"}}>Let’s find a home that’s perfect for you</p>
      </div>
      <div >
      <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} style={{border:"1px solid white", backgroundColor:"white",width:"1000px",borderRadius:"2%"}}>
        <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="For Saie" {...a11yProps(1)}/>
          <Tab label="For Rent" {...a11yProps(2)}/>
        </Tabs>
      <Box  >
      <CustomTabPanel value={value} index={0}>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
          <img style={{width:"25px",height:"25px",paddingTop:"19px"}}  src='v1.png'/>
          <TextField style={{width:"750px"}} placeholder= 'Enter an address, neighborhood, city, or ZIP code'/>
          </div>
          <img style={{width:"17px",height:"17px",paddingTop:"19px"}} src='v2.png'/>
          <p>Advanced</p>
          <img src='v3.png'/>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      </Box>
        
      </Box>
      </Box>

      </div>
      <div>
        <p style={{color:"white"}}>Or browse featured categories:</p>
        
      </div>
    </Grid>
  );
}
