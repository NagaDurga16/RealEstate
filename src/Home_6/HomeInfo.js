import { Grid, Stack } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export default function HomeInfo(){
    const DemoPaper = styled(Paper)(({ theme }) => ({
        width: 120,
        height: 120,
        padding: theme.spacing(2),
        ...theme.typography.body2,
        textAlign: 'center',
      }));
    return(
        <Grid style={{paddingTop:"20px"}}>
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <div>
                    <img src="girl.png"/>
                </div>
                <div>
                <Stack direction="row" spacing={2}>
                <DemoPaper square style={{height:"250px",width:"250px"}}>
                    <p style={{textAlign:"end"}}><img src="a.png"/></p>
                    <h2 style={{color:"red",textAlign:"start"}}>01</h2>
                    <h4>Search Your Dream Home</h4>
                    <p>Get ready to launch your real</p>
                    <p>
                   estate website without...</p>
                </DemoPaper>
                <DemoPaper square style={{height:"250px",width:"250px"}}>
                    <p style={{textAlign:"end"}}><img src="b.png"/></p>
                    <h2 style={{color:"red",textAlign:"start"}}>02</h2>
                    <h4>Choose The House You Like</h4>
                    <p>Get ready to launch your real</p>
                    <p>
                   estate website without...</p>
                </DemoPaper>
               </Stack>
               <br/>
               <br/>
               <Stack direction="row" spacing={2}>
               <DemoPaper square style={{height:"250px",width:"250px"}}>
                    <p style={{textAlign:"end"}}><img src="c.png"/></p>
                    <h2 style={{color:"red",textAlign:"start"}}>03</h2>
                    <h4>Enquire About This Property</h4>
                    <p>Get ready to launch your real</p>
                    <p>
                   estate website without...</p>
                </DemoPaper>
                <DemoPaper square style={{height:"250px",width:"250px"}}>
                    <p style={{textAlign:"end"}}><img src="d.png"/></p>
                    <h2 style={{color:"red",textAlign:"start"}}>04</h2>
                    <h4>Own Your Home</h4>
                    <p>Get ready to launch your real</p>
                    <p>
                   estate website without...</p>
                </DemoPaper>
               </Stack>
                </div>
            </div>
        </Grid>
    )
}