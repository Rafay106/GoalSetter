// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { updateGoal } from "../features/goals/goalSlice";
import GoalForm from "../components/GoalForm";

function UpdateGoal() {
  return (
    <div>
      <h2>Update your goal</h2>
      <GoalForm />
    </div>
  );
}
export default UpdateGoal;
