import React, { useState } from "react";
import "./AuthForm.css"; // Import the styles

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSignup = () => {
    if (name && email && password) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      alert("Signup successful! Please log in.");
      setIsLogin(true);
    } else {
      alert("Please fill all fields.");
    }
  };

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      alert("Login successful!");
      window.location.href = "/home"; // Redirect to home page
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h2>{isLogin ? "Hello, Friend!" : "Welcome Back!"}</h2>
        <p>
          {isLogin
            ? "Enter your personal details to start your journey with us"
            : "To keep connected with us please login with your personal info"}
        </p>
        <button className="btn" onClick={toggleForm}>
          {isLogin ? "Sign Up" : "Sign In"}
        </button>
      </div>

      <div className="right-panel">
        {isLogin ? (
          <>
            <h2 className="title">Login</h2>
            <div className="input-field">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </>
        ) : (
          <>
            <h2 className="title">Create Account</h2>
            <div className="input-field">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </div>
            <div className="input-field">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="input-field">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
            <button className="btn" onClick={handleSignup}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
