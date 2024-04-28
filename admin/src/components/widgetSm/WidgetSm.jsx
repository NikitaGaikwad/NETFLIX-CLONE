import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useState } from 'react';


export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZThiZGYzYjEzYmNmOTQ3YmI5MTQ3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwOTc1MjIxNSwiZXhwIjoxNzEyMzQ0MjE1fQ.8ppcIzNtHPs6qoQX3eXA_gMjZNUZ9Xp9nM8I6kUgmDE"
          }
        })
        setNewUsers(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getUsers()
  }, [])
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>

        ))}

      </ul>
    </div>
  );
}
