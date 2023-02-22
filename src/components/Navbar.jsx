import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../assets/person1.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../context/ContextProvider";

const NavButton = ({ title, customFunction, icon, color, dataColor }) => (
  <TooltipComponent content={ title } position="BottomCenter">
    <button
      type="button"
      onClick={ customFunction }
      style={ { color } }
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={ { background: dataColor } }
        className="absolute rounded-full inline-flex h-2 w-2 right-2 top-2"
      ></span>
      { icon }
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor
  } = useStateContext();


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [ screenSize ]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="menu"
        customFunction={ () =>
          setActiveMenu((prevActiveMenu) => !prevActiveMenu)
        }
        color={ currentColor }
        icon={ <AiOutlineMenu /> }
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunction={ () => handleClick("cart") }
          color={ currentColor }
          icon={ <FiShoppingCart /> }
        />
        <NavButton
          title="Chat"
          dataColor="#03c9d7"
          customFunction={ () => handleClick("chat") }
          color={ currentColor }
          icon={ <BsChatLeft /> }
        />
        <NavButton
          title="Notification"
          dataColor="#03c9d7"
          customFunction={ () => handleClick("notification") }
          color={ currentColor }
          icon={ <RiNotification3Line /> }
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={ () => handleClick("userProfile") }
          >
            <img
              src={ avatar }
              className="rounded-full w-8 h-8"
              alt="profile-img"
            />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{ " " }
              <span className="text-gray-400 font-bold ml-41 text-14">
                Hoso
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        { isClicked?.cart && <Cart /> }
        { isClicked?.chat && <Chat /> }
        { isClicked?.notification && <Notification /> }
        { isClicked?.userProfile && <UserProfile /> }
      </div>
    </div>
  );
};

export default Navbar;
