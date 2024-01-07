import { Link } from "react-router-dom";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";
import Footer from "../features/common/Footer";
import AssistantIcon from "@mui/icons-material/Assistant";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>

      <NavBar style={{ position: "relative" }}>
        <div
        className="assitant"
        style={{
          position:"fixed",
          display: "flex",
          justifyContent: "end",
          paddingRight: "10px",
          right: "2px",
          bottom:"10px",
        }}
      >
        <NavLink to="/chatbot">
          <AssistantIcon
            style={{
              backgroundColor: "aqua",
              borderRadius: "150px",
              padding: "6px",
              fontSize: "65px",
            }}
          />
        </NavLink>
      </div>
        <ProductList>
        </ProductList>
      </NavBar>
      <Footer></Footer>
    </div>
  );
}

export default Home;