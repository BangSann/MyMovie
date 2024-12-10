"use client";

import { useCookie } from "../../../hooks/useCookie";

const LoginMaster = () => {
  async function handleLogin() {
    const { setCookie } = useCookie();
    await setCookie({
      cookieName: "token",
      cookieValue: "123456789",
    });
  }

  return (
    <section className="flex justify-center items-center h-[100vh] bg-white text-black">
      <div className="space-y-4">
        <h1 className="text-center">Admin</h1>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-light mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="p-2 outline-1 outline rounded-md outline-gray-500"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="pass" className="text-sm font-light mb-1">
            Password
          </label>
          <input
            type="password"
            name="pass"
            id="pass"
            className="p-2 outline-1 outline rounded-md outline-gray-500"
          />
        </div>
        <div>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md w-full mt-8"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginMaster;
