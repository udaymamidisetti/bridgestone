import { MdDashboard } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { GiFlatTire } from "react-icons/gi";
import { GiTireIron } from "react-icons/gi";

const Links = [
  {
    name: "Dashboard",
    path: "/",
    icon: <MdDashboard />,
  },
  {
    name: "New Tire Rework",
    path: "/newtirerework",
    icon: <GiFlatTire />,
  },
  {
    name: "Rework Submission",
    path: "/reworksubmission",
    icon: <GiFlatTire />,
  },
  {
    name: "2C Rework",
    path: "/twocrework",
    icon: <GiTireIron />,
  },
  {
    name: "User Management",
    path: "/usermanagement",
    icon: <FiUsers />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <TbReport />,
  },
];

export default Links;
