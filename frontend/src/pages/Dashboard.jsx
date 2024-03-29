import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getGoals, reset } from "../features/goals/goalSlice";
import { toast } from "react-toastify";
import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinner";
import GoalItem from "../components/GoalItem";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (!user) navigate("/login");
    if (isError) toast.error(message);
    if (user && !isError) dispatch(getGoals());
    return () => dispatch(reset());
  }, [user, isError, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals.</h3>
        )}
      </section>
    </>
  );
}
