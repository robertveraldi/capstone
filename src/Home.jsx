import axios from "axios";
import { useEffect, useState } from "react";
import { ExercisesIndex } from "./ExercisesIndex";
import { ExercisesShow } from "./ExercisesShow";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Modal } from "./Modal";
import { RoutinesIndex } from "./RoutinesIndex";
import { RoutinesNew } from "./RoutinesNew";
import { Signup } from "./Signup";

export function Home() {
  const jwt = localStorage.getItem("jwt");
  if (jwt) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
  }

  const [exercises, setExercises] = useState([]);
  const [isExercisesShowVisible, setisExercisesShowVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState({});

  const [routines, setRoutines] = useState([]);

  const handleIndexExercises = () => {
    console.log("handleIndexExercises");
    axios.get("http://localhost:3000/exercises.json").then((response) => {
      console.log(response.data);
      setExercises(response.data);
    });
  };

  useEffect(handleIndexExercises, []);

  const handleShowExercise = (exercise) => {
    console.log("handleShowExercise", exercise);
    setisExercisesShowVisible(true);
    setCurrentExercise(exercise);
  };

  const handleHideExercise = () => {
    console.log("handleHideExercise");
    setisExercisesShowVisible(false);
  };

  const handleIndexRoutines = () => {
    console.log("handleIndexRoutines");
    axios.get("http://localhost:3000/routines.json").then((response) => {
      console.log(response.data);
      setRoutines(response.data);
    });
  };

  useEffect(handleIndexRoutines, []);

  const handleCreateRoutine = (params, successCallback) => {
    console.log("handleCreateRoutine", params);
    axios.post("http://localhost:3000/routines.json", params).then((response) => {
      setRoutines([...routines, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <Login />
      <LogoutLink />
      <Signup />
      <ExercisesIndex exercises={exercises} onSelectExercise={handleShowExercise} />
      <Modal show={isExercisesShowVisible} onClose={handleHideExercise}>
        <ExercisesShow exercise={currentExercise} />
      </Modal>
      <RoutinesIndex routines={routines} />
      <RoutinesNew onCreateRoutine={handleCreateRoutine} />
    </div>
  );
}
