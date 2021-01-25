import React, { useState, useEffect } from "react";
import axios from "axios";

export default (subjectId) => {
  const [subject, setSubject] = useState(null);
  const [error, setError] = useState(null);

  const loadSubject = async () => {
    try {
      const result = await axios.get(
        `http://104.248.157.15:8000/api/v1/subjects/${subjectId}`
      );
      setSubject(result.data.data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadSubject();
  }, []);

  return [subject, error];
};
