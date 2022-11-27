import { ReactComponentElement, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const history = useNavigate();
  const POST_URL = "";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    axios
      .post(POST_URL, {
        username: username,
        password: password,
      })
      .then(() => history("/GamePage"));
  };
  return (
    <div className="Login">
      <h1>Login</h1>
      <div className="container">
        <div className="input-container">
          <label>Username: </label>
          <input
            type="text"
            name="uname"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Password: </label>
          <input
            type="password"
            name="pass"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
