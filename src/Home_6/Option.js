import { Button, Grid } from "@mui/material";

export default function () {
  return (
    <Grid style={{backgroundColor:"#F7F7F7"}}>
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <div>
          <h3>Let’s find the right</h3>
          <h3>selling option for you</h3>
          <p>As the complexity of buildings to increase, the field</p>
          <p>of architecture.</p>
          <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>Find excellent deals</p>
          </div>
          <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>Friendly host & Fast support</p>
          </div>
        
        <div style={{display:"flex"}}>
          <p><img src="t.png"/>
          </p><p>List your own property</p>
          </div>
          <Button style={{border:"1px solid red",backgroundColor:"red",color:"whitesmoke"}}>Learn More</Button>
        </div>
        <div>
          <img src="fam.png" />
        </div>

      </div>
    </Grid>
  );
}
