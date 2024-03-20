import { Button, Grid } from "@mui/material";
import AppleIcon from '@mui/icons-material/Apple';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
export default function Download(){
    return(
        <Grid style={{backgroundColor:"#F8F8FF"}}>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <div><img src="h63.png.png"/></div>
                <div>
                    <p>start today</p>
                    <h2>Download the App</h2>
                    <p>Take classes on the go with the realton app. Stream or download to</p><p>
watch on the plane, the subway, or wherever you learn best.</p>
<div style={{display:"flex",justifyContent:"space-evenly"}}>
    <Button style={{backgroundColor:"black",color:"white",borderRadius:"5%",height:"70px"}}>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <p style={{paddingTop:"10px"}}><AppleIcon/></p>
        <div>
        <p>Download on The</p>
        <h5 style={{marginTop:"-10px"}}>Apple store</h5>
        </div>
        </div>
        </Button>
        <Button style={{backgroundColor:"black",color:"white",borderRadius:"5%",height:"70px"}}>
        <div style={{display:"flex"}}>
        <p style={{paddingTop:"10px"}}><PlayArrowIcon/></p>
        <div>
        <p>Download on The</p>
        <h5 style={{marginTop:"-10px"}}>Play store</h5>
        </div>
        </div>
        </Button>
</div>
                </div>
            </div>
        </Grid>
    )
}