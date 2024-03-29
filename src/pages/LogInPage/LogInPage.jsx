import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LogInPage = () => {
  return (
    <div>
      <div className="flex justify-center login-item  py-5 ">
        <div className=" ">
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm border rounded-md border-black ">
            <div>
              <div className="p-8 space-y-3 rounded-xl  text-neutral">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form
                  noValidate=""
                  action=""
                  className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                  <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 rounded-md border border-gray-700  text-neutral"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className="block ml-2 text-sm font-medium text-neutral"
                      htmlFor="Password"
                    >
                      Password
                    </label>
                    <div className="relative flex items-center mt-1">
                      <span className="absolute">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 mx-3 text-neutral/30"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                          />
                        </svg>
                      </span>

                      {open.password ? (
                        <span className="absolute right-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mx-3 text-neutral/30 hover:text-neutral/75 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span className="absolute right-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mx-3 text-neutral/30 hover:text-neutral/75 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        </span>
                      )}

                      <input
                        type={`${open.password ? "text" : "password"}`}
                        name="password"
                        className="block w-full py-3 text-neutral bg-white border rounded-lg px-11"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <small>
                    <p className="text-error -mt-2"></p>
                  </small>
                  <button
                    type="submit"
                    className="block w-full  px-5 py-3 mt-5 rounded-md bg-[#4d8577] hover:bg-[#41685e] text-white uppercase font-bold"
                  >
                    Log in
                  </button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                  <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                  <p className="px-3 text-sm">Login with social accounts</p>
                  <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center">
                  <button className="btn items-center justify-center  btn-outline p-4 border rounded-full border-[#33524A] hover:bg-stone-800">
                    <FcGoogle></FcGoogle>
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center">
                  <button className="btn items-center justify-center btn-circle btn-outline"></button>
                </div>
                <p className="text-sm text-center sm:px-6">
                  Do not have an account? <br />
                  <Link
                    rel="noopener noreferrer"
                    to="/register"
                    className="underline hover:text-[#33524A]"
                  >
                    Register Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
