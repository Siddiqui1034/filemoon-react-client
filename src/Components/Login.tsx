const Login = () => {
  return (
    <div className="flex flex-column items-center justify-center rounded-md w-full h-screen">
      <form className="w-1/3 h-1/2 flex flex-col gap-3 p-8 rounded-md overflow-hidden bg-[#060913] bg-[radial-gradient(at_0%_0%,rgba(30,58,138,0.35)_0px,transparent_50%),radial-gradient(at_80%_20%,rgba(126,34,206,0.25)_0px,transparent_50%),radial-gradient(at_100%_100%,rgba(6,182,212,0.18)_0px,transparent_45%)] text-slate-100">
        <h1 className="text-xl text-center font-bold">Login</h1>
        <div className="px-3 py-2 border flex gap-4 items-center border-gray-500 rounded-md my-2">
          <i className="ri-mail-line"></i>
          <input
            type="email"
            id="email"
            placeholder="Angela@gmail.com"
            className="w-full p-1 bg-transparent outline-none"
          />
        </div>
        <div className="px-3 py-2 border flex gap-4 items-center border-gray-500 rounded-md my-2">
          <i className="ri-lock-password-line"></i>
          <input
            type="password"
            id="password"
            placeholder="********************"
            className="w-full p-1 bg-transparent outline-none"
          />
        </div>
        <button
          className="p-3 space-x-2 text-center w-full gap-4 items-center rounded-md my-2 font-bold text-slate-100
          bg-linear-to-r from-blue-600 via-purple-500 to-cyan-900 shadow-[0_0_15px_rgba(6,182,212,0.2)]
          hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:scale-102 transition-all"
          type="submit"
        >
          <i className="ri-login-circle-line"></i>
          <span>Login</span>
        </button>

        <div className="">
          <p className="text-sm space-x-2 text-gray-200 font-light">
            <span>Don't have an account?</span>
            <a
              href="/signup"
              className="text-purple-500 font-bold hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
