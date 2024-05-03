import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navigation = () => {

  const navigate = useNavigate ();

  async function handleLogout(event: any) {
    const option = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
    try {
        const response = await fetch(
            "https://library-crud-sample.vercel.app/api/user/logout",option);
        if(!response.ok){
            throw new Error("Login Failed");
        }
        const data = await response.json();
        console.log(data);

        setTimeout(() => {
            alert("Logout Success");
            localStorage.removeItem('token');
            navigate("/");
        }, 1000);
    } catch (error) {
        console.error("Error:", error);
    }   
}

  return (
    <nav className="flex flex-wrap justify-end items-center font-semibold">
      <ul className="flex flex-wrap justify-end items-center ">
        <li>
          <Link to="/Dashboard" className="flex flex-wrap text-center relative mx-3 hover:underline">Home</Link>
        </li>
        {/* <li>
          <Link to="/pokemon" className="flex flex-wrap text-center relative mx-3 hover:underline">Evolution</Link>
        </li> */}
        <li>
        <button onClick={handleLogout} className="flex flex-wrap text-center relative mx-3 hover:underline">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
