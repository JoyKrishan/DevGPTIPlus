import React from "react";
import { Avatar } from "antd";

interface AvatarCustomProps {
  username: string;
  imgUrl?: string | null;
  style?: React.CSSProperties;
}

const nameToColor = (name: string) => {
  let hash = 0;
  for (let i = 0; i < Math.min(3, name.length); i++) {
    hash = 31 * hash + name.charCodeAt(i);
  }
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2);
  }

  return color;
};

const AvatarCustom: React.FC<AvatarCustomProps> = ({
  username,
  imgUrl = null,
  style = {},
}) => {
  const firstLetter = username.charAt(0).toUpperCase();
  const bgColor = nameToColor(username);

  const getAvatarSrc = (imgUrl: string | null) => {
    if (!imgUrl || imgUrl === "https://i.imgur.com/tPmUQVM.png") {
      return null;
    } else {
      return imgUrl;
    }
  };

  return (
    <Avatar
      src={getAvatarSrc(imgUrl)}
      style={{
        ...style,
        backgroundColor: bgColor,
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        border: 0,
      }}
    >
      {firstLetter}
    </Avatar>
  );
};

export default AvatarCustom;