import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-gray-500 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
            console.log("email", email);
            console.log("password", password);
            setEmail("");
            setPassword("");
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-black outline-none bg-transparent e border-2 border-gray-600 text-xl rounded-full py-3 px-5"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="text-black outline-none bg-transparent  border-2 border-gray-600 text-xl mt-3 rounded-full py-3 px-5"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-5 text-white outline-none    bg-gray-600 border-gray-600 text-xl rounded-full py-2 px-8">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
