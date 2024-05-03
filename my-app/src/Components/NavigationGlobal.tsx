import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navigation = () => {

  const navigate = useNavigate ();


  return (
    <nav className="flex flex-wrap justify-end items-center font-semibold">
      <ul className="flex flex-wrap justify-end items-center">
        <li>
          <Link to="/" className="flex flex-wrap text-center relative mx-3 hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/Register" className="flex flex-wrap text-center relative mx-3 hover:underline">Register</Link>
        </li>
        <li>
          <Link to="/FormLogin" className="flex flex-wrap text-center relative mx-3 hover:underline">Login</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navigation;
