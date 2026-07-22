import { useState } from "react";
import { signup } from "../services/authService";

function Signup({ showLogin }) {
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

  const handleSignup = async () => {
    setError("");
    if (password.length < 6) {
  setError("Password must be at least 6 characters long.");
  return;
}

if (password !== confirmPassword) {
  setError("Passwords do not match.");
  return;
}
    try {
  setLoading(true);

  await signup({
    name,
    email,
    password,
  });

  showLogin();

} catch (error) {
  setError(error.response?.data?.message || "Signup Failed");
} finally {
  setLoading(false);
}
  };

  return (
    <div className="container">
      <div className="task-card auth-card">
        <h1>Todo App</h1>
        <h2>Create Account</h2>

        <input
        id="name"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSignup()}
        />

        <input
        id="email"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSignup()}
        />

        <input
        id="password"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSignup()}
        />

        <input
  id="confirmPassword"
  type="password"
  placeholder="Confirm Password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && handleSignup()}
/>
{error && <p className="error-message">{error}</p>}

        <button
  onClick={handleSignup}
  disabled={loading}
>
  {loading ? "Signing up..." : "Signup"}
</button>

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