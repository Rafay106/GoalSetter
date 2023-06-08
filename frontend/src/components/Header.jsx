import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const onLogout = async () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const gotoProfile = async () => {
    navigate(`/profile/${user._id}`);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul>
        {user ? (
          <li id="first">
            <span>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </span>
            <span>
              <button className="btn" onClick={gotoProfile}>
                <FaUser /> Profile
              </button>
            </span>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Regisder
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
