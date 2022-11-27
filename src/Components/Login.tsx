import {useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Client, Databases, Functions,Account} from 'appwrite';
const Login = () => {
  let randomKey = (Math.random() + 1).toString(36).substring(7);
  const client = new Client()
    .setEndpoint('http://142.231.35.245/v1') 
    .setProject('6383942dc79e9dd200ba');
    const database = new Databases(client);               

  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const promise =database.createDocument(
      "63839a02706f35258388",
      "63839a9f80e96951778d",
      randomKey, 
      {username:username,password:password,exp:0,energy:100,item_id:(id_1:1, id_2:2, id_3:3, id_4:4, id_5:5, id_6:6)=>{}}
      )
      promise.then(function(response){ 
        history("/GamePage",response.id)});
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
          <button type="submit" onClick={handleSubmit}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
