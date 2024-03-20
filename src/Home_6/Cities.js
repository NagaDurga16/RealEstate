import { Grid } from "@mui/material"

export default function Cities(){
    return(
        <Grid style={{paddingLeft:"30px",paddingRight:"30px"}}>
            <div>
            <h2>Explore Cities</h2>
            <p style={{color:"gray"}}>Aliquam lacinia diam quis lacus euismod</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <div><img src="b1.png"/>
                <p>Los Angeles</p>
                <p style={{color:"gray"}}>2 Properties</p>
                </div>
                <div><img src="b2.png"/>
                <p>San Francisco</p>
                <p style={{color:"gray"}}>1 Properties</p>
                </div>
                <div><img src="b3.png"/>
                <p>New York</p>
                <p style={{color:"gray"}}>10 Properties</p>
                </div>
                <div><img src="b4.png"/>
                <p>Chicago</p>
                <p style={{color:"gray"}}>1 Properties</p>
                </div>
                
            </div>
        </Grid>
    )
}