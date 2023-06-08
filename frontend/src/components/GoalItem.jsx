import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <Link to={`/update/${goal._id}`}>
        <h2>{goal.text}</h2>
      </Link>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        <FaWindowClose />
      </button>
    </div>
  );
}
export default GoalItem;
