import { useNavigate } from "react-router-dom";
import FooterComponent from "../Components/FooterComponent";
import StatsComponent from "../Components/StatsComponent";
import Navigation from "../Components/NavigationPrivate";



  const DashboardComponent= () => {
  
    const navigate = useNavigate();

    return (
        <>
          <Navigation/>
          <div>
            <StatsComponent />
          </div>
          <div>
            <FooterComponent/>
          </div>
        </>
    );
  };
export default DashboardComponent;
