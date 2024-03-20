import { Grid } from "@mui/material";
import Header from "./Header";
import HomeInfo from "./HomeInfo";

import Discover from "./Discover";
import Footer from "./Footer";
import Cities from "./Cities";
import Option from "./Option";
import Test from "./Test";
import Feature from "./Feature";
import Member from "./Member";
import Agents from "./Agents";
import Download from "./Download";


export default function Main(){
    return(
        <Grid >
    <Header/>
     <HomeInfo/>
     <Discover/>
     <Cities/>
     <Option/>
     <Test/>
     <Feature/>
     <Member/>
     <Agents/>
     <Download/>
     <Footer/>
     
        </Grid>
    )
}