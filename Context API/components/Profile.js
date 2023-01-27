import React from "react";
import { useUser } from "../context/UserContex";

function Profile() {
  const { user, setuser } = useUser();
  const [loading, setloading] = React.useState(false);

  const handleLogin = () => {
    setloading(true);
    setTimeout(() => {
      setuser({
        id: 1,
        name: "Soner",
        city: "Bayburt",
      });
      setloading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setuser(null);
  };
  return (
    <div>
      Profile
      <h3>{JSON.stringify(user)}</h3>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "loading..." : "Login"}
        </button>
      )}
      {user && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
}

export default Profile;
