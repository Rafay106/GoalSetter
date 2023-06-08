import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createGoal, updateGoal } from "../features/goals/goalSlice";

function GoalForm({ btnTxt = "Add Goal" }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { goalId } = useParams();

  const onSubmit = (e) => {
    e.preventDefault();
    if (goalId) {
      const goalData = {
        goalId,
        text,
      };
      dispatch(updateGoal(goalData));
      navigate("/");
    } else {
      dispatch(createGoal({ text }));
      setText("");
    }
  };

  return (
    <>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              placeholder="Enter your goal"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" type="submit">
              {btnTxt}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
export default GoalForm;
