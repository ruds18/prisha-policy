import login_img from "../assets/login.png";
import logo from "../assets/logo.png";
function Login() {

  return (
    <div className="w-full h-dvh bg-grey_custom p-2 flex justify-between items-center">
      <div className=" flex items-center justify-center w-full h-full ">
        <img className="h-[45rem]" src={login_img} alt="doodle" />
      </div>
      <div className="bg-white p-6 flex flex-col items-center justify-center h-full w-[80%] rounded-lg">
        <img className="mt-10" src={logo} alt="" />
        <h1  className="text-4xl font-semibold mt-12">Welcome back!</h1>
        <p className="mt-4 font-light">Please enter your details</p>

        <form className="h-full w-[60%] mt-14">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900  text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              type="floating_email"
              className=" text-black peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              type="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-black px-5 py-4 mt-4 rounded-full w-full"
          >
            Log In
          </button>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
