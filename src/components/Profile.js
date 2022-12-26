import { useContext } from "react";
import { Button } from "react-bootstrap";
import api from "../api";
import UserContext from "../context/UserContext";

export default function Profile() {
  const {user, setUser} = useContext(UserContext);

  const handleLogOut = () => {
    setUser(null);
    api.get('/users/logout');
  };

  return (
    <div>
      <h3>Hello {user ? `${user.first_name} ${user.last_name} ;)`  : null}</h3>
      <Button variant="primary" onClick={handleLogOut}>
        Log Out
      </Button>
    </div>
  )
}