import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isLegalsOpen, setIsLegalsOpen] = useState(false);

  const onAboutClickHandler = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const onResourcesClickHandler = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  const onLegalsClickHandler = () => {
    setIsLegalsOpen(!isLegalsOpen);
  };

  return (
    <div className="flex flex-col items-center md:items-start md:grid md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 sm:px-20 py-10 bg-blue-50">
      <div>
        <h4 className="text-xl lg:text-2xl font-semibold">Quick Contact</h4>

        <p className="text-sm md:text-xs lg:text-sm my-4">
          Don't hasitate to call or drop us a line
        </p>

        <h6 className="text-xl lg:text-2xl xl:text-3xl font-bold">
          +964 (770) 123 4567
        </h6>
        <p className="text-sm md:text-xs lg:text-sm my-4">contact@gmail.com</p>
      </div>

      <div className="col-span-2 lg:col-span-1 xl:col-span-2 grid grid-cols-3 items-start mt-8 md:mt-0 px-6 lg:px-0 gap-x-6 lg:gap-x-0">
        <div className={`flex flex-col space-y-3 justify-center pl-5 lg:pl-0`}>
          <h6
            onClick={onAboutClickHandler}
            className="md:text-lg font-bold flex items-center"
          >
            About{" "}
            <FontAwesomeIcon className="lg:hidden ml-1" icon={faAngleDown} />
          </h6>
          <Link
            className={`${
              isAboutOpen ? "inline" : "hidden"
            } inline lg:inline text-sm`}
            to="/#"
          >
            Company
          </Link>
          <Link
            className={`${
              isAboutOpen ? "inline" : "hidden"
            } inline lg:inline text-sm`}
            to="/#"
          >
            Teams
          </Link>
          <Link
            className={`${
              isAboutOpen ? "inline" : "hidden"
            } inline lg:inline text-sm`}
            to="/#"
          >
            Profile
          </Link>
          <Link
            className={`${
              isAboutOpen ? "inline" : "hidden"
            } inline lg:inline text-sm`}
            to="/#"
          >
            Careers
          </Link>
        </div>

        <div className={`flex flex-col space-y-3 justify-center `}>
          <h6
            onClick={onResourcesClickHandler}
            className="md:text-lg font-bold flex items-center"
          >
            Resources{" "}
            <FontAwesomeIcon className="lg:hidden ml-1" icon={faAngleDown} />
          </h6>
          <Link
            className={`${
              isResourcesOpen ? "inline" : "hidden"
            } inline lg:inline text-sm`}
            to="/#"
          >
            Contact
          </Link>
          <Link
            className={`${
              isResourcesOpen ? "inline" : "hidden"
            } inline lg:inline text-sm`}
            to="/#"
          >
            Application
          </Link>
          <Link
            className={`${
              isResourcesOpen ? "inline" : "hidden"
            } inline lg:inline text-sm`}
            to="/#"
          >
            FAQ
          </Link>
          <Link
            className={`${
              isResourcesOpen ? "inline" : "hidden"
            } inline lg:inline text-sm`}
            to="/#"
          >
            Features
          </Link>
        </div>

        <div className={`flex flex-col space-y-3 justify-center`}>
          <h6
            onClick={onLegalsClickHandler}
            className="md:text-lg font-bold flex items-center"
          >
            Legals{" "}
            <FontAwesomeIcon className="lg:hidden ml-1" icon={faAngleDown} />
          </h6>
          <Link
            className={`${
              isLegalsOpen ? "inline" : "hidden"
            } inline lg:inline text-sm`}
            to="/#"
          >
            Partners
          </Link>
          <Link
            className={`${
              isLegalsOpen ? "inline" : "hidden"
            } inline lg:inline text-sm`}
            to="/#"
          >
            Privacy Policy
          </Link>
          <Link
            className={`${
              isLegalsOpen ? "inline" : "hidden"
            } inline lg:inline text-sm`}
            to="/#"
          >
            Disclaimer
          </Link>
          <Link
            className={`${
              isLegalsOpen ? "inline" : "hidden"
            } inline lg:inline text-sm`}
            to="/#"
          >
            Terms
          </Link>
        </div>
      </div>

      <div className="mt-10 py-10 border-t-2 border-blue-200 md:col-span-3 lg:col-span-2 xl:col-span-3 flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0">
        <h6 className="order-1 md:order-2 text-lg font-bold">Company Name</h6>
        <p className="order-3 md:order-1 text-xs">
          &copy;2021 Orix creative Agency. All rights reserved
        </p>
        <select
          className="order-2 md:order-3 bg-transparent text-sm"
          name="languages"
        >
          <option value="English">English</option>
          <option value="Arabic">Arabic</option>
          <option value="Kurdish">Kurdish</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
