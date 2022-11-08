import axios from "axios";
import { useEffect, useState } from "react";
import { ExercisesIndex } from "./ExercisesIndex";

export function Home() {
  const [exercises, setExercises] = useState([]);

  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  useEffect(handleIndexExercises, []);

  return (
    <div>
      <ExercisesIndex exercises={exercises} />
    </div>
  );
}
