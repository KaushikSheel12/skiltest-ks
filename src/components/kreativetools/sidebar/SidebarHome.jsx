import React from "react";
import { Profile } from "./Profile";
import { ProfileLable } from "./ProfileLable ";
import { TbWorldBolt } from "react-icons/tb";
import { MdOutlineColorLens, MdSlowMotionVideo } from "react-icons/Md";
import { AiOutlineAlibaba } from "react-icons/ai";

export const SidebarHome = () => {
  

const sidebarlink=[
  {
    icon:<TbWorldBolt/>,
    title:"Graphic Design",
    href:"/graphic-design",
    links:["Color","Font","Mockup"]
  },
  {
    icon:<TbWorldBolt/>,
    title:"Web Design",
    href:"/web-design",
    links:["UI-Kit", "Icon", "No-Code"]
  },
  {
    icon:<TbWorldBolt/>,
    title:"Motion Design",
    href:"/motion-design",
    links:["Script & Plugin", "Sound Design"]
  },{
    icon:<TbWorldBolt/>,
    title:"Video Editing",
    href:"/video-editing",
    links:["Footage", "Music& Sound"]
  }
]

  return (
    <>
{sidebarlink.map(({title,href,links,icon})=>
  <div className="">
        <ProfileLable title={title} href={href}  links={links} icon={icon} />
      </div>
)}
     
    </>
  );
};
