import React from "react";
import { Profile } from "./Profile";
import { ProfileLable } from "./ProfileLable ";
import { TbWorldBolt } from "react-icons/tb";
import { MdOutlineColorLens, MdSlowMotionVideo } from "react-icons/Md";
import { AiOutlineAlibaba } from "react-icons/ai";

export const SidebarHome = () => {
  const GraphicTitles = ["Color", "Font","Mockup"];
  const WebdesignTitles = ["UI Kit", "Icon", "No Code"];
  const MotionTitle = ["Script & Plugin", "Sound Design"];
  const VideoeditingTitle = ["Footage", "Music& Sound"];
  return (
    <>
      <Profile icon={<MdOutlineColorLens size={20} />} title="Graphic Design" />
      <div className="pl-12 ">
        <ProfileLable  label={GraphicTitles} />
      </div>
      <Profile icon={<TbWorldBolt size={20} />} title="Web Design" />
      <div className="pl-12 ">
        <ProfileLable label={WebdesignTitles} />
      </div>

      <Profile icon={<AiOutlineAlibaba size={20} />} title="Motion Design" />
      <div className="pl-12 ">
        <ProfileLable label={MotionTitle} />
      </div>

      <Profile icon={<MdSlowMotionVideo size={20} />} title="Video Editing" />
      <div className="pl-12 ">
        <ProfileLable label={VideoeditingTitle} />
      </div>
    </>
  );
};
