import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  const history = useNavigate();
  function handleClick() {
    history("/explore"); // Replace "/new-page" with the path of the page you want to navigate to
  }
  const handleLogin = async (e) => {
    console.log(email, password);
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:8000/auth/login", {
        email: email,
        password: password,
      });
      if (response.data) {
        console.log(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/explore");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="bg-black h-24 text-white text-2xl font-bold flex items-center justify-start p-8 w-full">
        MusicNext
      </div>
      <div className="bg-[#24292F] p-64 pt-10 mt-0">
        <div className="bg-black rounded-md mt-4 m-28 ml-40 md:w-4/6 h-full">
          <p className="text-4xl font-bold text-blue-400 dark:text-white ml-20 pt-10 pl-20">
            Log in to MusicNext
          </p>
          <div className=" mb-4  pl-48 pt-6">
            <div>
              <button
                type="button"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-5 mb-2"
              >
                <svg
                  className="w-20 h-4 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                </svg>
                Continue with Facebook
              </button>
            </div>

            <div>
              <button
                type="button"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <svg
                  className="w-20 h-4 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                Continue with Google....
              </button>
            </div>
            <div className="">
              <button
                type="button"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2"
              >
                <svg
                  className="w-20 h-4 mr-2 -ml-1"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="apple"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
                Continue with Apple.......
              </button>
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-white-300 dark:hover:bg-white mr-2 mb-2"
              >
                <div className="ml-6">Continue with phone number........</div>
              </button>
            </div>
          </div>
          <div className="pl-4 ml-15 mt-0">
            <hr className=" h-0.5/2 ml-90 pl-9 mx-16  mt-1  bg-gray-100  md:my-10 dark:bg-white" />
          </div>

          {/* <div className ="mt-4 mb-4 m-40 p-20 relative"> */}
          <form className="mt-0">
            <div className="ml-28 pl-14 mt-3 mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Email or username
              </label>
              <input
                type="email"
                id="email"
                className="bg-[#24292F] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@email.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="ml-28 pl-14 mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white dark:text-grey"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-[#24292F] border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5 ml-20 pl-2">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 ml-20 pl-20 border border-green-800 rounded bg-green-400 focus:ring-3  "
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2  text-sm font-medium text-white dark:text-gray-300"
              >
                {" "}
                Remember me
              </label>
            </div>
            <div className="ml-64 center mr-28 pl-5 mb-7">
              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-80 sm:w-auto px-10 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onSubmit={handleLogin}
                onClick={handleClick}
              >
                Log in
              </button>
            </div>
          </form>
          <div className="ml-64 pl-1">
            <a
              href="#"
              className="font-medium text-white hover:underline underline  hover:text-green-400"
            >
              Forgot your password?
            </a>
          </div>

          <div className="pl-4 ml-15 mt-0">
            <hr className=" h-0.5/2 ml-90 pl-9 mx-16  mt-1  bg-gray-100  md:my-10 dark:bg-white" />
          </div>

          <div className="ml-40  pb-10 text-white">
            Don't have an account?
            <a
              href="#"
              className="font-medium text-white underline hover:underline hover:text-green-400"
            >
              {" "}
              Sign up for MusicNext
            </a>
          </div>
        </div>

        <div className="ml-5 pl-40 mt-2 text-white text-sm">
          This site is protected by reCAPTCHA and the Google
          <a
            href="#"
            className="font-medium text-white  underline hover:underline text-sm hover:text-black"
          >
            {" "}
            Privacy Policy,Terms of Service
          </a>{" "}
          apply
        </div>
      </div>
    </div>
  );
};
