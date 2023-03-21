import React from 'react'
import { Box, Button, Image, useColorMode } from "@chakra-ui/react";
import {BiSun,BiMoon} from "react-icons/bi";
import {GiHamburgerMenu} from "react-icons/gi";
import {ImCross} from "react-icons/im";
import { Link } from 'react-router-dom';
import Day from "../Asset/DAY_HK_INTERIORS.png"
import Night from "../Asset/NIGHT_HK_INTERIORS.png"
import style from "./style.module.css"
import { useState } from 'react';


const Navbar = () => {
    const[flag,setFlag]=useState(false)
    const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box >
    <Box className={style.main}>

        <Box className={style.logo}>
<Link to="/">
<Image className={style.image} src={colorMode==="light"?Day:Night}  alt="logo"/>

</Link>
</Box>
        <Box className={style.mainsub}>

<Box>
<Link to="/">HOME</Link>
</Box>
<Box>
<Link to="/about">ABOUT</Link>
</Box>
<Box>
<Link to="/package">PACKAGES</Link>
</Box>
<Box>
<Link to="/contact">CONTACT</Link>
</Box>

    <Button onClick={toggleColorMode}>
     {colorMode === 'light' ?<BiMoon/> : <BiSun/> }
  </Button>

        </Box>

  <Box className={style.burger}>
{flag===true?<ImCross onClick={()=>setFlag(false)}/>:<GiHamburgerMenu onClick={()=>setFlag(true)}/>}
</Box>
</Box>
<Box className={style.cross}>
{flag===true?
    <ul className={flag===true?style.mainsub2:style.mainsub22}>

<li>
<Link to="/">HOME</Link>
</li>
<li>
<Link to="/about">ABOUT</Link>
</li>
<li>
<Link to="/package">PACKAGES</Link>
</li>
<li>
<Link to="/contact">CONTACT</Link>
</li>

    <Button onClick={toggleColorMode}>
     {colorMode === 'light' ?<BiMoon/> : <BiSun/> }
  </Button>
    </ul>:<Box className={style.mainsub22}>

    </Box>

}
 
</Box>
    </Box >
  )
}

export default Navbar