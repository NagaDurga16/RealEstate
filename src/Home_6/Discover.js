import { Grid } from "@mui/material";
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
export default function Discover(){
    return(
        <Grid style={{paddingLeft:"30px",paddingRight:"30px"}}>
            <div>
            <div style={{textAlign:"start"}}>
                <h2>Discover Our Featured Listing</h2>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <p>Aliquam lacinia diam quis lacus euismod</p>
                <h3>See All Properties</h3>
                </div>
            </div>
            <div
              elevation={3}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                borderRadius: 5,
                
              }}
            >
              <div style={{border:"1px solid skyblue"}}>
                <paper>
                  {" "}
                  <img src="1.png" style={{ width: "100%" }} />
                </paper>{" "}
                
                <p>House on the Hollywood</p>
                <p style={{color:"gray"}}>374 Johnson Ave</p>
                <hr/>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{display:"flex"}}>
                        <BedOutlinedIcon/>
                        6 beds
                    </div>
                    <div style={{display:"flex"}}>
                        <ShowerOutlinedIcon/>
                        2 baths
                    </div>
                    <div style={{display:"flex"}}>
                        <img src="Vector.png"/>
                        200 sqft
                    </div>
                    
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                        <p>For sale</p>
                        <p>
                            <NoteOutlinedIcon/>
                            <FavoriteBorderOutlinedIcon/>
                            <AddToPhotosOutlinedIcon/>
                        </p>
                    </div>
              </div>
              <div style={{border:"1px solid skyblue"}}>
                {" "}
                <img src="2.png" style={{ width: "100%" }} />{" "}
                <p>Comfortable Villa Green</p>
                <p style={{color:"gray"}}>374 Johnson Ave</p>
                <hr/>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{display:"flex"}}>
                        <BedOutlinedIcon/>
                        6 beds
                    </div>
                    <div style={{display:"flex"}}>
                        <ShowerOutlinedIcon/>
                        2 baths
                    </div>
                    <div style={{display:"flex"}}>
                        <img src="Vector.png"/>
                        200 sqft
                    </div>
                    
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                        <p>For sale</p>
                        <p>
                            <NoteOutlinedIcon/>
                            <FavoriteBorderOutlinedIcon/>
                            <AddToPhotosOutlinedIcon/>
                        </p>
                    </div>
              </div>
              <div style={{border:"1px solid skyblue"}}> 
                {" "}
                <img src="3.png" style={{ width: "100%" }} />{" "}
                <p>Quality House For Sale</p>
                <p style={{color:"gray"}}>374 Johnson Ave</p>
                <hr/>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{display:"flex"}}>
                        <BedOutlinedIcon/>
                        6 beds
                    </div>
                    <div style={{display:"flex"}}>
                        <ShowerOutlinedIcon/>
                        2 baths
                    </div>
                    <div style={{display:"flex"}}>
                        <img src="Vector.png"/>
                        200 sqft
                    </div>
                    
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                        <p>For sale</p>
                        <p>
                            <NoteOutlinedIcon/>
                            <FavoriteBorderOutlinedIcon/>
                            <AddToPhotosOutlinedIcon/>
                        </p>
                    </div>
              </div>
              <div style={{border:"1px solid skyblue"}}>
                {" "}
                <img src="4.png" style={{ width: "100%" }} />{" "}
                <p>Diamond Family Home</p>
                <p style={{color:"gray"}}>374 Johnson Ave</p>
                <hr/>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <div style={{display:"flex"}}>
                        <BedOutlinedIcon/>
                        6 beds
                    </div>
                    <div style={{display:"flex"}}>
                        <ShowerOutlinedIcon/>
                        2 baths
                    </div>
                    <div style={{display:"flex"}}>
                        <img src="Vector.png"/>
                        200 sqft
                    </div>
                    
                </div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                        <p>For sale</p>
                        <p>
                            <NoteOutlinedIcon/>
                            <FavoriteBorderOutlinedIcon/>
                            <AddToPhotosOutlinedIcon/>
                        </p>
                    </div>
              </div>
            </div>
            </div>
        </Grid>
    )
}