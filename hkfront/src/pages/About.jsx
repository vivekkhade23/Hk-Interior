import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import style from "./styles.module.css"
import {FaRegHandPointRight} from "react-icons/fa";


const About = () => {
    return (
        <Box className={style.mainabout}>


            <Box className={style.aboutboxone}>
                <Box className={style.imageabout}>
                    <Image src="https://i.pinimg.com/600x315/9a/04/fc/9a04fc748f3dccb493d19d1bc8eafd1b.jpg" />
                </Box>
                <Box className={style.whatabout}>
                    <Box>

                        <Text className={style.maintextabout}>
                            <Text>W</Text>
                            <Text>H</Text>
                            <Text>A</Text>
                            <Text>T</Text>
                            <Text>W</Text>
                            <Text>E</Text>
                            <Text>D</Text>
                            <Text>O</Text>
                            <Text>?</Text>
                        </Text>
                    </Box>
                    <Box className={style.space}>
                        <i>

                        <Text className={style.spacetextodd}><FaRegHandPointRight/> <span> SPACE PLANNING</span></Text>
                        <Text className={style.spacetexteven}><FaRegHandPointRight/> <span> LAYOUTING</span></Text>
                        <Text className={style.spacetextodd}><FaRegHandPointRight/> <span> VASTU </span></Text>
                        <Text className={style.spacetexteven}><FaRegHandPointRight/> <span> BUILT-IN/CUSTOM FURNITURE</span></Text>
                        <Text className={style.spacetextodd}><FaRegHandPointRight/> <span> CEILING DESIGNS</span></Text>
                        <Text className={style.spacetexteven}><FaRegHandPointRight/> <span> RENOVATION</span></Text>
                        <Text className={style.spacetextodd}><FaRegHandPointRight/> <span> MAINTAINANCE</span></Text>
                        <Text className={style.spacetexteven}><FaRegHandPointRight/> <span> RE-DESIGNING </span></Text>
                        <Text className={style.spacetextodd}><FaRegHandPointRight/> <span> CONSTRUCTION WORK</span></Text>
                        </i>
                    </Box>
                </Box>
            </Box>
            {/*  */}


            <Box className={style.aboutboxtwo}>
                <Box className={style.whatabout}>
<p  className={style.spacetextpara}>
                    <i>

<span className={style.first}> W</span>E ARE SPECIALIZED IN  PLANNING AND  DESIGNING OF NEW CONSTRUCTION SPACES AS WELL AS RENOVATION OF EXISTING PROJECTS, FROM SIMPLE DESIGNS TO HIGH-LEVEL INTERIOR DESIGNS. YOU CAN TRUST US WITH YOUR HOUSE AS WE HOLD A QUALIFIED STAFF IN OUR TEAM WHO ARE HIGHLY EXPERIENCED AND CAN MANAGE HIGH-LEVEL ARCHITECTURAL PLANNING AND FURNISHING LUXURIOUS LIVING SPACES.


                    </i>
   </p>
                </Box>
                <Box className={style.imageabout}>
<Image src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </Box>
            </Box>

        </Box>
    )
}

export default About