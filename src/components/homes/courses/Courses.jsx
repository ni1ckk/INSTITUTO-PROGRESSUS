import React from "react";
import CourceCard from "../courseCards/CourseCard";
import { coursesData, catagories } from "../../../data/courses";
import { useState, useEffect } from "react";
export default function Courses() {
  const [filtered, setFiltered] = useState();
  const [category, setCategory] = useState("All Categories");
  useEffect(() => {
    if (category == "All Categories") {
      setFiltered();
    } else {
      const filteredData = coursesData.filter(
        (elm) => elm.category == category,
      );
      setFiltered(filteredData);
    }
  }, [category]);


}
