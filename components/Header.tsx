import Link from "next/link";
import { FC } from "react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Button } from "@mui/material";

type Props={
    home: boolean;
}
const Header:FC<Props> = ({home}) => {
    return (
        <>
           <header
           style={{
            backgroundColor:"blue",
            color:"white",
            padding:"10px"
           }}
           >
            <h1>SALTMOUNTAIN BIGSKY</h1>
            </header>
           <div style={{margin:10}}> {
                home?(
           <Link
           href="/"
           >
            <Button variant="contained" endIcon={<HomeRoundedIcon/>}>
                    home
            </Button>
            
           </Link>):null}</div>
        </>
    );
}

export default Header;