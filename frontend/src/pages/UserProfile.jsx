import { useSelector } from "react-redux";

function UserProfile() {
  const { user } = useSelector((state) => state.auth);
  // console.log(user);
  let x = Object.entries(user);
  console.log(x);
  return (
    <div>
      <h1>User Details</h1>
      <div>
        {Object.entries(user).map(([key, val]) => (
          <p key={key}>
            {key}: {val}
          </p>
        ))}
      </div>
    </div>
  );
}
export default UserProfile;
