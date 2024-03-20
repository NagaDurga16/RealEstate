import { Button, Grid } from "@mui/material";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";

export default function Feature() {
  return (
    <Grid>
        <div style={{textAlign:"center"}}>
          <h3>Featured Properties</h3>
          <p>Aliquam lacinia diam quis lacus euismod</p>
        </div>
      <div style={{display:"flex",justifyContent:"center"}}>
        
        <div style={{backgroundColor:"#F4EFF7",width:"585px",paddingTop:"50px"}}>
          <div>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <Button style={{backgroundColor:"red",color:"white"}}>Feratured</Button>
                <Button style={{backgroundColor:"black",color:"white"}}>For Sale</Button>
            </div>
            <div style={{textAlign:"center"}}>
            <h3>Comfortable Villa Green</h3>
            <p style={{color:"gray"}}>178 Broadway, Brooklyn</p>
            <div style={{ display: "flex",justifyContent:"center" }}>
              <div style={{ display: "flex" }}>
                   <p> <img src="d1.png"/></p>
                   <p style={{paddingTop:"20px"}}>6 beds</p>
              </div>
              <div style={{ display: "flex" }}>
              <p> <img src="d2.png"/></p>
                   <p style={{paddingTop:"20px"}}>10 baths</p>
              </div>
              <div style={{ display: "flex" }}>
              <p> <img src="d3.png"/></p>
                   <p style={{paddingTop:"20px"}}>600 sqfts</p>
              </div>
              
            </div>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <p>Total Free Customer Care</p>
                <p>Live Support?</p>
              </div>
              <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <h5>(+88)123-555-888</h5>
                <h5>agent@apus.com</h5>
              </div>
              <div style={{display:"flex",justifyContent:"space-evenly"}}>
              <h2 >$5,800</h2>
              <div style={{display:"flex"}}>
              <p > <img src="d1.png" /></p>
              <p> <img src="d2.png"/></p>
              <p> <img src="d3.png"/></p>
              </div>
              </div>
              </div>
          </div>

        </div>
        <div>
            <img src="fe.png" />
          </div>
      </div>
    </Grid>
  );
}
