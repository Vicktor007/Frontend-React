import { logout, logoutUser } from "@/Redux/Auth/Action";
import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import {
  ExitIcon,
  HandIcon,
  BookmarkFilledIcon,
  BookmarkIcon,
  PersonIcon,
  DashboardIcon,
  HomeIcon,
  BellIcon,
  ActivityLogIcon,
} from "@radix-ui/react-icons";
import { CreditCardIcon, LandmarkIcon, WalletIcon } from "lucide-react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
const menu = [
  { name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6" /> },
  {
    name: "Portfolio",
    path: "/portfolio",
    icon: <DashboardIcon className="h-6 w-6" />,
  },

  {
    name: "Watchlist",
    path: "/watchlist",
    icon: <BookmarkIcon className="h-6 w-6" />,
  },
  {
    name: "Activity",
    path: "/activity",
    icon: <ActivityLogIcon className="h-6 w-6" />,
  },
  { name: "Wallet", path: "/wallet", icon: <WalletIcon /> },
  {
    name: "Payment Details",
    path: "/payment-details",
    icon: <LandmarkIcon className="h-6 w-6" />,
  },

  {
    name: "Withdrawal",
    path: "/withdrawal",
    icon: <CreditCardIcon className="h-6 w-6" />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <PersonIcon className="h-6 w-6" />,
  },
  
  { name: "Logout", path: "/", icon: <ExitIcon className="h-6 w-6" /> },
];
const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = localStorage.getItem("jwt");


  const handleLogout = () => {
    dispatch(logoutUser(token));
  };

  
  const handleMenuClick = (item) => {
    if (item.name == "Logout") {
      handleLogout(token);
      navigate(item.path);
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="mt-10 space-y-5 overflow-y-auto max-h-[90%] scrollable-div">
      {menu.map((item) => (
        <div key={item.name} className="">
          <SheetClose className="w-full">
            <div
              onClick={() => handleMenuClick(item)}
              className="flex items-center gap-5 py-3 w-[90%] border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md px-4 cursor-pointer"
            >
              <span className="w-8">{item.icon}</span>

              <p>{item.name}</p>
            </div>
          </SheetClose>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
