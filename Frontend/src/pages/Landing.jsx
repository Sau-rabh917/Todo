import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 min-h-screen bg-gray-50 px-8 py-12">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          <span className="block">Organize your tasks with ease</span>
          <span className="block text-cyan-700 mt-2">finally</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          We can make our todo list more organized and efficient with the help
          of this app.
        </p>
        <div className="flex gap-4">
          <Link to="/register">
            <button className="bg-cyan-900 hover:bg-cyan-800 text-white px-6 py-2 rounded shadow cursor-pointer">
              Register Now!
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-emerald-900 hover:bg-emerald-800 text-white px-6 py-2 rounded shadow cursor-pointer">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://img.freepik.com/free-photo/time-organization-concept-close-up_23-2149046744.jpg?semt=ais_hybrid&w=740"
          alt="Organize tasks"
          className="rounded-lg shadow-lg object-cover max-h-[400px] w-full"
        />
      </div>
    </div>
  );
};

export default Landing;