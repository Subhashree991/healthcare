import axios from "axios";
import React, { useContext, useState } from "react";
import { DoctorContext } from "../context/DoctorContext";
import { AdminContext } from "../context/AdminContext";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Admin"); // Admin | Doctor | Forgot Password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgotFor, setForgotFor] = useState("Admin"); // Track forgot-password target
  const [loading, setLoading] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const { setDToken } = useContext(DoctorContext);
  const { setAToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      if (state === "Admin") {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, {
          email,
          password,
        });
        if (data.success) {
          setAToken(data.token);
          localStorage.setItem("aToken", data.token);
        } else {
          toast.error(data.message);
        }
      } else if (state === "Doctor") {
        const { data } = await axios.post(`${backendUrl}/api/doctor/login`, {
          email,
          password,
        });
        if (data.success) {
          setDToken(data.token);
          localStorage.setItem("dToken", data.token);
        } else {
          toast.error(data.message);
        }
      } else if (state === "Forgot Password") {
        const url =
          forgotFor === "Admin"
            ? "/api/admin/forgot-password"
            : "/api/doctor/forgot-password";
        const { data } = await axios.post(backendUrl + url, { email });
        if (data.success) {
          toast.success("Reset link sent to your email");
          setState(forgotFor); // Return to previous login type
        } else {
          toast.error(data.message);
        }
      }
    } catch (err) {
      toast.error("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">
            {state === "Forgot Password" ? forgotFor : state}
          </span>{" "}
          {state === "Forgot Password" ? "Forgot Password" : "Login"}
        </p>

        <div className="w-full">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            type="email"
            required
          />
        </div>

        {state !== "Forgot Password" && (
          <div className="w-full">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
              type="password"
              required
            />
          </div>
        )}

        <button
          disabled={loading}
          className="bg-primary text-white w-full py-2 rounded-md text-base"
        >
          {loading
            ? "Please wait..."
            : state === "Forgot Password"
            ? "Send Reset Link"
            : "Login"}
        </button>

        {/* Bottom Links */}
        {state === "Admin" && (
          <>
            <p>
              Doctor Login?{" "}
              <span
                onClick={() => setState("Doctor")}
                className="text-primary underline cursor-pointer"
              >
                Click here
              </span>
            </p>
            <p>
              Forgot Password?{" "}
              <span
                onClick={() => {
                  setState("Forgot Password");
                  setForgotFor("Admin");
                }}
                className="text-primary underline cursor-pointer"
              >
                Click here
              </span>
            </p>
          </>
        )}

        {state === "Doctor" && (
          <>
            <p>
              Admin Login?{" "}
              <span
                onClick={() => setState("Admin")}
                className="text-primary underline cursor-pointer"
              >
                Click here
              </span>
            </p>
            <p>
              Forgot Password?{" "}
              <span
                onClick={() => {
                  setState("Forgot Password");
                  setForgotFor("Doctor");
                }}
                className="text-primary underline cursor-pointer"
              >
                Click here
              </span>
            </p>
          </>
        )}

        {state === "Forgot Password" && (
          <p>
            Go back to{" "}
            <span
              onClick={() => setState(forgotFor)}
              className="text-primary underline cursor-pointer"
            >
              {forgotFor} Login
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
