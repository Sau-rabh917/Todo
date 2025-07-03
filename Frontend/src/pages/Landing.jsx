import { Link } from "react-router-dom";

const landing = () => {
  return (
    <>
      <div className="flex flex-row align-center justify-space-between gap-4 h-100vh max-w-1200 ">
        <h1>
          <span>organize your tasks with ease</span>
          <span>finally</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          neque alias id dolorem quaerat aperiam facilis iste iusto dolore
          eligendi animi omnis reprehenderit, ducimus porro, hic autem commodi
          quam veniam?
        </p>

        <Link className="btn red " to={"/register"}>
          Register Now !
        </Link>
        <Link className="btn green" to={"/login"}>
          Login
        </Link>
        <img
          src="https://img.freepik.com/free-photo/time-organization-concept-close-up_23-2149046744.jpg?semt=ais_hybrid&w=740"
          alt="image" width={"100%"} height={515}
        />
      </div>
    </>
  );
};

export default landing;
