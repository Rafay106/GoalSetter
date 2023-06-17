import { useSelector } from "react-redux";

function UserProfile() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="user-details">
      <h1>User Details</h1>
      <div>
        {Object.entries(user).map(([key, val]) => {
          if (key !== "token") {
            return (
              <p key={key}>
                {key}: {val}
              </p>
            );
          } else return <></>;
        })}
      </div>
    </div>
  );
}
export default UserProfile;
