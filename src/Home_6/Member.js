import { Button, Grid, Paper } from "@mui/material";

export default function Member() {
  return (
    <Grid>
      <div style={{textAlign:"center"}}>
        <h2>Membership Plans</h2>
        <p>Aliquam lacinia diam quis lacus euismod</p>
      </div>
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <div>
          <Paper style={{padding:"30px"}}>
            <div style={{ display: "flex",justifyContent:"space-evenly" }}>
              <div>
                <h3>Professional</h3>
                <h2>$599.00</h2>
              </div>
              <img src="i1.png" />
            </div>
            <p>Professional listing submission, active</p>
            <p>for 60 days</p>
            <div>
            <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>All Operating Supported</p>
          </div>
          <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>20 Property Listings</p>
          </div>
          <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>60 Days Availability</p>
          </div>
          <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>Feature Properties</p>
          </div>
          <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>24/7 Full support</p>
          </div>
          <Button style={{border:"1px solid red",color:"red"}}>Add To Cart</Button>
            </div>
          </Paper>
        </div>
        <div>
        <Paper style={{padding:"30px",backgroundColor:"#F4EFF7"}}>
            <div style={{ display: "flex" ,justifyContent:"space-evenly"}}>
              <div>
                <h3>Buisiness</h3>
                <h2>$999.00</h2>
              </div>
              <img src="i2.png" />
            </div>
            <p>Buisiness listing submission, active</p>
            <p>for 90 days</p>
            <div>
            <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>All Operating Supported</p>
          </div>
          <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>20 Property Listings</p>
          </div>
          <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>60 Days Availability</p>
          </div>
          <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>Feature Properties</p>
          </div>
          <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>24/7 Full support</p>
          </div>
          <Button style={{border:"1px solid red",color:"white",backgroundColor:"red"}}>Add To Cart</Button>
            </div>
          </Paper>
        </div>
        <div>
        <Paper style={{padding:"30px"}}>
            <div style={{ display: "flex", justifyContent:"space-evenly"}}>
              <div>
                <h3>Basic</h3>
                <h2>Free</h2>
              </div>
              <img src="i3.png" />
            </div>
            <p>Basic listing submission, active</p>
            <p>for 30days</p>
            <div>
            <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>All Operating Supported</p>
          </div>
          <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>20 Property Listings</p>
          </div>
          <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>60 Days Availability</p>
          </div>
          <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>Feature Properties</p>
          </div>
          <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>24/7 Full support</p>
          </div>
          <Button style={{border:"1px solid red",color:"red"}}>Add To Cart</Button>
            </div>
          </Paper>
        </div>
      </div>
    </Grid>
  );
}
