import { useState } from "react";
import { login, googleLogin } from "../services/authService";
import { GoogleLogin } from "@react-oauth/google";

function Login({ onLogin, showSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
  try {
    setLoading(true);
    setError("");

    await login({ email, password });

    onLogin();
  } catch (error) {
    setError(
  error.response?.data?.message || "Login Failed"
);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="container">
      <div className="task-card auth-card">
        <h1>Todo App</h1>
        <h2>Login</h2>

       <input
  id="email"
  type="email"
  placeholder="Enter Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
/>

      <input
  id="password"
  type="password"
  placeholder="Enter Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
/>

{error && <p className="error-message">{error}</p>}
        <button
  onClick={handleLogin}
  disabled={loading}
>
  {loading ? "Logging in..." : "Login"}
</button>

<p className="or-text">OR</p>

<GoogleLogin
  onSuccess={async (credentialResponse) => {
    try {
      await googleLogin(credentialResponse.credential);
      onLogin();
    } catch (error) {
  console.log(error);
  console.log(error.response);

  alert(
    error.response?.data?.message ||
    error.message ||
    "Google Login Failed"
  );
}
  }}
  onError={() => {
    alert("Google Login Failed");
  }}
/>


<p className="or-text">OR</p>

<GoogleLogin
  onSuccess={async (credentialResponse) => {
    try {
      await googleLogin(credentialResponse.credential);
      onLogin();
    } catch (error) {
      alert(error.response?.data?.message || "Google Login Failed");
    }
  }}
  onError={() => {
    alert("Google Login Failed");
  }}
/>

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