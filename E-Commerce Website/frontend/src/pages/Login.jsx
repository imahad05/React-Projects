import React, { useState } from "react";
import { useShop } from "../context/ShopContext";

const Login = () => {
  const {navigate} = useShop()
  const [currentState, setCurrentState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentState === "Sign Up" && !name)
      return setError("Name is required");
    if (!email) return setError("Email is required");
    if (!password) return setError("Password is required");

    setError("");
    setName("");
    setEmail("");
    setPassword("");
    navigate('/')
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Sign Up" && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password</p>
        {currentState === "Sign Up" ? (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Login")}
          >
            Login here
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Sign Up")}
          >
            Create account
          </p>
        )}
      </div>
      {error && <p className="text-red-500 w-full">{error}</p>}
      <button
        type="submit"
        className="bg-black text-white px-8 py-2 mt-4 font-light"
      >
        {currentState}
      </button>
    </form>
  );
};

export default Login;
