import { NavLink } from "react-router-dom";
import "./MainMenu.css";
import { useState } from "react";
import { store } from "../../redux/store";

function MainMenu(): JSX.Element {
  const [isUser,setUser] = useState(false);
  const [isCompany,setCompany] = useState(false);
  const [isAdmin,setAdmin] = useState(false);
  
  store.subscribe(()=>{
    switch (store.getState().auth.role){
        case "Admin":
            setAdmin(true);
            break;
        case "Company":
            setCompany(true);
            break;
        case "User":
            setUser(true);
            break;
        default:
            setAdmin(false);
            setCompany(false);
            setUser(false);
    }
  })

  const showMainMenu = () => {
    return (
      <>
        <NavLink to={"/search/car"}>car locater</NavLink>
        <br />
        <NavLink to={"/search/bike"}>bike locater</NavLink>
        <br />
        <NavLink to={"/search/truck"}>truck locater</NavLink>
        <br />
        <NavLink to={"/search/offroad"}>offride locater</NavLink>
        <hr />
      </>
    );
  };

  const showAdminMenu = ()=>{
    return (
        <>
          <NavLink to={"/"}>user list</NavLink>
          <br />
          <NavLink to={"/"}>find user</NavLink>
          <br />
          <NavLink to={"/"}>delete user</NavLink>
          <hr />
          <NavLink to={"/"}>company list</NavLink>
          <br />
          <NavLink to={"/"}>find company</NavLink>
          <br />
          <NavLink to={"/"}>delete company</NavLink>
          <br/>
          <NavLink to={"/hacker"}>Gabriel</NavLink>
          <hr />
        </>
      );
  }

  const showCompanyMenu = ()=>{
    return (
        <>
          <NavLink to={"/"}>vacation list</NavLink>
          <br />
          <NavLink to={"/"}>find vacation</NavLink>
          <br />
          <NavLink to={"/"}>delete vacation</NavLink>
          <br />
          <NavLink to={"/"}>add vacation</NavLink>
          <br />
          <NavLink to={"/"}>update vacation</NavLink>
          <hr/>
        </>
      );
  }

  const showUserMenu = ()=>{
    return (
        <>
          <NavLink to={"/"}>my vacations</NavLink>
          <br />
          <NavLink to={"/"}>wish list</NavLink>
          <br />
          <NavLink to={"/"}>delete vacation</NavLink>
          <hr/>
        </>
      );
  }


  return (
    <div className="MainMenu">
      <h2>Main Menu</h2>
      <hr />
      {showMainMenu()}
      {isAdmin && showAdminMenu()}
      {isCompany && showCompanyMenu()}
      {isUser && showUserMenu()}
    </div>
  );
}

export default MainMenu;
