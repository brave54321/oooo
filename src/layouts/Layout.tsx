import React from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import CustomNavbar from "../components/Navbars/CustomNavbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

import routes from "../routes";

const Layout: React.FC<RouteComponentProps> = (props) => {
  const mainPanel = React.useRef(null);
  const role = localStorage.getItem("role");

  const getRoutes = (routes: any) => {
    return routes.map((prop: any, key: any) => {
      if (role === "dac-admin" && prop.layout === "/dac-admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else if (role === "dac-member" && prop.layout === "/dac-member"){
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else if(role === "user" && prop.layout === "/user") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return (
          <Route 
            path="/" exact
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        )          
      }
    });
  };

  return (
    <>
      <div className="wrapper">
        <Sidebar color="azure" image={""} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <CustomNavbar />
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Layout;
