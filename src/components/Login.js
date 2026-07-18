import { useState } from "react";
import { login } from "../services/authService";

function Login({ onLogin, showSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login({ email, password });
      onLogin();
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="container">
      <div className="task-card auth-card">
        <h1>Todo App</h1>
        <h2>Login</h2>

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

        <button onClick={handleLogin}>Login</button>

        <p>
          Don't have an account?{" "}
          <span className="link" onClick={showSignup}>
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;