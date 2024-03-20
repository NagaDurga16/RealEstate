import { Grid } from "@mui/material";
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

export default function Footer() {
  return (
    <Grid style={{backgroundColor:"#0D1C39",backgroundImage:`url(bg.png)`,backgroundRepeat:"no-repeat"}}>
      <Grid >
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
            <div style={{display:"flex"}}>
            <img src="home.png"/>
            
            </div>
            <div style={{display:"flex"}}>
              <h3 style={{color:"white"}}>Follow Us</h3>
              <img src="List.png"/>
            </div>
            
        </div>
        </Grid>
        
      <Grid container borderTop="1px solid gray"borderBottom="1px solid gray">
        <Grid item xs={1}></Grid>
        <Grid item xs={2} style={{textAlign:"start"}}>
          <h3 style={{color:"white"}}>Popular Search</h3>
          <p style={{color:"white"}}>Apartment for Sale</p>
          <p style={{color:"white"}}>Apartment for Rent</p>
          <p style={{color:"white"}}>Offices for Sale</p>
          <p style={{color:"white"}}>Offices for Rent</p>
        </Grid>
        <Grid item xs={2} style={{textAlign:"start"}}>
          <h3 style={{color:"white"}}>Quick Links</h3>
          <p style={{color:"white"}}>Terms of Use</p>
          <p style={{color:"white"}}>Privacy Policy</p>
          <p style={{color:"white"}}>Pricing Plans</p>
          <p style={{color:"white"}}>Our Services</p>
          <p style={{color:"white"}}>Contact</p>
          <p style={{color:"white"}}>Careers</p>
          <p style={{color:"white"}}>FAQs</p>
        </Grid>
        <Grid item xs={2} style={{textAlign:"start"}}>
          <h3 style={{color:"white"}}>Discovery</h3>
          <p style={{color:"white"}}>Chicago</p>
          <p style={{color:"white"}}>Los Angeles</p>
          <p style={{color:"white"}}>New Jersey</p>
          <p style={{color:"white"}}>New York</p>
          <p style={{color:"white"}}>California</p>
        </Grid>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={6} style={{textAlign:"start"}}>
              <p style={{color:"white"}}>Total Free Customer Care</p>
              <h4 style={{color:"white"}}>+(088)123456789</h4>
              <h3 style={{color:"white"}}>Keep Yourself Up to Date</h3>
            </Grid>
            <Grid item xs={6} style={{textAlign:"start"}}>
              <p style={{color:"white"}}>Live Support?</p>
              <h4 style={{color:"white"}}>hi@homez.com</h4>
            </Grid>
            <div
              style={{
                display: "flex",
                border: "1px solid white",
                background: "white",
                borderRadius: "5%",
                width:"300px",
                justifyContent:"space-evenly"
              }}
            >
              <p>Your email</p>
              <p>Subscribe</p>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <div style={{display:"flex"}}>
      <CopyrightOutlinedIcon style={{paddingTop:"10px",fill:"gray"}}/>
      <p style={{color:"gray"}}>Homez-All rights reserved</p>
      </div>
      <div>
        <p style={{color:"gray"}}>Pivacy . Terms . Sitemap</p>
      </div>

      </div>
    </Grid>
  );
}
