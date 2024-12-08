import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/actions/login-actions.js";
import { useNavigate } from "react-router-dom";

function FormIn({ welcomeText, buttonText, questOne, actionOne, redirectTo }) {
  const [isOn, setIsOn] = useState(true); // true = Remember me on, false = off
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Mengambil state login dari Redux
  const isLoginSuccess = useSelector((state) => state.login.isLoginSuccess);
  const isLoginPending = useSelector((state) => state.login.isLoginPending);
  const isLoginError = useSelector((state) => state.login.isLoginError);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redirect ke halaman home jika login berhasil
  useEffect(() => {
    if (isLoginSuccess) {
      navigate("/"); // Redirect ke home
    }
  }, [isLoginSuccess, navigate]);

  // Fungsi untuk menangani perubahan toggle "Remember Me"
  const handleToggle = () => {
    setIsOn((prevState) => !prevState);
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(email, password)); // Memanggil aksi login
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <h2 className="text-main-army font-extrabold text-2xl leading-tight">
        {welcomeText}
      </h2>

      <input
        type="text"
        className="form-input w-96 bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)} // Menangkap input email
      />

      <div className="relative w-96">
        <input
          type="password"
          className="form-input w-full bg-gray-100 rounded-lg py-3 pl-5 pr-4 text-gray-700 placeholder-gray-500 border border-gray-400"
          placeholder="Enter Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)} // Menangkap input password
        />
        <i className="fa-solid fa-eye absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
      </div>

      <div className="flex items-center text-gray-500">
        <span>
          <button
            type="button"
            className={`fa-solid ${
              isOn ? "fa-toggle-on text-main-yellow" : "fa-toggle-off text-main-yellow"
            } fa-2x mr-2`}
            onClick={handleToggle}
          ></button>
        </span>
        <span className="mr-28">Remember me</span>
        <span>Forgot Password?</span>
      </div>

      {/* Tampilkan pesan status login */}
      {isLoginPending && <p className="text-yellow-500">Loading...</p>}
      {isLoginError && <p className="text-red-500">{isLoginError}</p>}

      <button
        type="submit"
        className="rounded-lg w-96 bg-main-yellow h-10 font-semibold"
      >
        {buttonText}
      </button>

      <div className="border-b-2 border-gray-300 w-96 mt-5"></div>

      <div className="flex gap-3 px-14">
        <span className="text-gray-500">{questOne}</span>
        <span className="text-main-army font-bold hover:underline">
          <a href={redirectTo}>{actionOne}</a>
        </span>
      </div>
    </form>
  );
}

export default FormIn;
