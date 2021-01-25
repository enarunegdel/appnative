import { useState, useEffect } from "react";
import axios from "axios";

export default (lectureID) => {
  const [subjects, setSubjects] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const searchSubject = (searchValue) => {
    console.log(searchValue + " текстээр хайлт эхэллээ ...");
  };
  useEffect(() => {
    axios
      .get(
        `http://104.248.157.15:8000/api/v1/lectures/${lectureID}/subjects?limit=200&sort=_id`
      )
      .then((result) => {
        console.log("Сэдвүүдийг амжилттай хүлээн авлаа...");
        setSubjects(result.data.data);
        setErrorMessage(null);
      })
      .catch((err) => {
        let message = err.message;
        if (message === "Request failed with status code 404")
          message = "Мэдээллийн санд энэ өгөгдөл алга...";
        else if (message === "Network Error")
          message =
            "Сервер ажиллахгүй байна. Сүлжээний тохируулгаа шалгана уу...";
        setErrorMessage(message);
      });
  }, []);
  return [subjects, errorMessage];
};
