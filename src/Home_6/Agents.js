import { Box, Grid } from "@mui/material";
const STATUS = [
    {
      image:
        "p1.png",
      title: "Ralph Johnson",
      prp:"Manager"
    },
    {
        image:
          "p2.png",
        title: "Lori Ramos",
        prp:"Marketing"
      },
      {
        image:
          "p3.png",
        title: "Jack Graham",
        prp:"Marketing"
      },
      {
        image:
          "p4.png",
        title: "Augusta Silva",
        prp:"Leader Homez"
      },
      {
        image:
          "p5.png",
        title: "Albert Flores",
        prp:"Marketing"
      },
]
    
export default function Agents(){
    return(
        <Grid style={{paddingLeft:"30px",paddingRight:"30px"}}>
            <div>
                <h2>Our Exclusive Agents</h2>
                <p>Aliquam lacinia diam quis lacus euismod</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-evenly"}}> 
            <Grid style={{ display: "flex", paddingRight: 60, paddingLeft: 60 }}>
        {" "}
        {STATUS.map(({ image, title,prp}, i) => (
          <Box sx={{ paddingLeft: 1, paddingRight: 1 }}>
            <p>
              <img
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                
                }}
                src={image}
              />
            </p>
            <p> {title}</p>
            <p>{prp}</p>
          </Box>
        ))}
      </Grid>
            </div>
        </Grid>
    )
}