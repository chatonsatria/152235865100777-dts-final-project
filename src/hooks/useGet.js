import { useState } from "react";
import axios from "axios";

const useGet = (url) => {
  const [data, setData] = useState({
    status: "",
    feedback: "",
    baseUrl: "",
  });

  const reset = () => {
    setData({
      status: "",
      feedback: "",
      baseUrl: "",
    });
  };

  async function get() {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/${url}?key=20109c30826841c080967a631d81a3f3`,
        {
          headers: {
            "X-RapidAPI-Key":
              "adee57426emshf60425c4c1147a4p109ef8jsnbed24be54e15",
            "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
          },
        }
      );
      if (res.status === 200) {
        setData({
          status: true,
          feedback: res.data,
        });
      }
    } catch (error) {
      setData({
        status: error.response.data.message,
        feedback: "",
      });
    }
  }

  return { data, get, reset };
};

export default useGet;
