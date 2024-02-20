import React from "react";
import {  useEffect, useState } from "react";
import Axios from "axios";
export default function ScreenHighscore() {
  const [loading, setIsLoading] = useState(true);
  const [highscore, setHighscore] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await Axios.get(`${VITE_APP_API_BASE_URL}/pokemon`).then((res) => {
       
          setHighscore(res.data);
          setIsLoading(false);
        });
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="ScreenHighscore">
     
      <button
        id="goBack"
        className="text-2xl font-bold mb-4 text-center bg-red-900 text-white   rounded-lg p-2 border-2 border-rose-700 h-20  bg-opacity-70  hover:bg-opacity-100  hover:bg-rose-500  hover:text-white  cursor-pointer w-72 mt-4"
        onClick={async () => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </div>
  );
}
