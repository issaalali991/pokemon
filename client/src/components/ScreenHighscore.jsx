import React from "react";

import { useEffect, useState, navigate } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { reloadPage } from "../utils/utils";
export default function ScreenHighscore() {
  const [loading, setIsLoading] = useState(true);
  const [highscore, setHighscore] = useState(true);
  const navigate = useNavigate();
  const VITE_APP_API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await Axios.post(`${VITE_APP_API_BASE_URL}/pokemon/mongoo`).then(
          (res) => {
            setHighscore(res.data);
            console.log(res.data);
            setIsLoading(false);
          }
        );
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="ScreenHighscore">
      <h1 className="text-4xl font-bold mb-4 text-center">Highscore</h1>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th
                  className="px-4 py-2 
                font-bold 
                "
                >
                  Name
                </th>
                <th className="px-4 py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {highscore &&
                highscore
                  .sort((b, a) => a.turns - b.turns)
                  .slice(0, 10)
                  .map((score) => (
                    <tr key={score._id}>
                      <td className="cursor-pointer hover:bg-gray-200 transition duration-500 ease-in-out p-1.5 shadow-lg border-2 border-gray-200  hover:border-gray-500  rounded-lg  w-1/2 text-lg">
                        {score.name_won}
                      </td>
                      <td className="cursor-pointer hover:bg-gray-200 transition duration-500 ease-in-out p-1.5 shadow-lg border-2 border-gray-200  hover:border-gray-500  rounded-lg  w-1/2 text-lg">
                        {score.turns}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      )}

      <button
        id="goBack"
        className="text-2xl font-bold mb-4 text-center bg-red-900 text-white   rounded-lg p-2 border-2 border-rose-700 h-20  bg-opacity-70  hover:bg-opacity-100  hover:bg-rose-500  hover:text-white  cursor-pointer w-72 mt-4"
        onClick={async () => {
          navigate("/");
          reloadPage();
        }}
      >
        Go Back
      </button>
    </div>
  );
}
