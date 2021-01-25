import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [lectures, setLectures] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchLecture = () => {
    console.log("Хайлт эхэллээ ...");
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://104.248.157.15:8000/api/v1/lectures")
      .then((result) => {
        console.log("Сургалтыг амжилттай хүлээн авлаа...");
        setLectures(result.data.data);
        setErrorMessage(null);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        let message = err.message;
        if (message === "Request failed with status code 404")
          message = "Мэдээллийн санд энэ өгөгдөл алга...";
        else if (message === "Network Error")
          message =
            "Сервер ажиллахгүй байна. Сүлжээний тохируулгаа шалгана уу...";
        setErrorMessage(message);
      });
  }, []);
  return [lectures, errorMessage, searchLecture, loading];
};
