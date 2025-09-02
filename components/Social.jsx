"use client";

import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaYoutube, FaBehance, FaDribbble} from "react-icons/fa"


const socials = [
    
    { icon: <FaGithub />, path: 'https://github.com/Meraj-Uddin-Malik' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/merajuddinmalik/' },
    { icon: <FaYoutube />, path: 'https://www.youtube.com/@zemimaas' },
    { icon: <FaBehance />, path: 'https://www.behance.net/merajuddin136/projects' },
    { icon: <FaDribbble />, path: 'https://dribbble.com/MerajUddin/shots' },
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
        </div>
  )
}

export default Social
