import { useState } from "react";
import { signup } from "../services/authService";

function Signup({ showLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await signup({
        name,
        email,
        password,
      });

      alert("Signup Successful! Please Login.");
      showLogin();
    } catch (error) {
      alert(error.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div className="container">
      <div className="task-card auth-card">
        <h1>Todo App</h1>
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>Signup</button>

        <p>
          Already have an account?{" "}
          <span className="link" onClick={showLogin}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;