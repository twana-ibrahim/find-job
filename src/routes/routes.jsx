import { Switch, Route } from "react-router-dom";
import routes from "./routeDefinitions";
import Home from "../containers/Home/Home";
import Signup from "../containers/Signup/Signup";
import Signin from "../containers/Signin/Signin";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Routes = () => {
  const location = useLocation();

  // the route file
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path={routes.signup.path} component={Signup} />
        <Route exact path={routes.signin.path} component={Signin} />
        <Route exact path={routes.home.path} component={Home} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
