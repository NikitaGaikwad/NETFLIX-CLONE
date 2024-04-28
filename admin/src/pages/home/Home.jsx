import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import React from 'react';
import { useState, useEffect, useMemo } from "react";
import axios from "axios";


export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ], []
  )

  const [userStats, setUsersStats] = useState([])
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZThiZGYzYjEzYmNmOTQ3YmI5MTQ3OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwOTc1MjIxNSwiZXhwIjoxNzEyMzQ0MjE1fQ.8ppcIzNtHPs6qoQX3eXA_gMjZNUZ9Xp9nM8I6kUgmDE"
          }
        })
        const statsList = res.data.sort(function (a, b) {
          return a._id - b._id
        })
        statsList.map((item) =>
          setUsersStats(prev => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        )
      }
      catch (error) {
        console.log(error);
      }
    }
    getStats()
  }, [MONTHS])

  // console.log(userStats)
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
