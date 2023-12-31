import React from "react";
import { Menu, Avatar } from "@mantine/core";

function ProfileMenu({ user, logout }) {
  return (
    <Menu offset={5}>
      <Menu.Target>
        <Avatar src={user?.picture} alt="user image" radius={"l"} />
      </Menu.Target>
      <Menu.Dropdown style={{padding:"1rem"}}>
        <Menu.Item>Favourites</Menu.Item>
        <Menu.Item>Bookings</Menu.Item>
        <Menu.Item onClick={()=>{
            localStorage.clear();
            logout();
        }}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ProfileMenu;
