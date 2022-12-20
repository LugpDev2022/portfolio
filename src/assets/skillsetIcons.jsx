import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiJest } from "react-icons/si";

export const skillsetIcons = [
  {
    icon: <AiFillHtml5 />,
    id: "tooltip-html",
    tooltip: "HTML",
  },
  {
    icon: <FaCss3Alt />,
    id: "tooltip-css",
    tooltip: "CSS",
  },
  {
    icon: <FaSass />,
    id: "tooltip-sass",
    tooltip: "Sass",
  },
  {
    icon: <FaBootstrap />,
    id: "tooltip-bootstrap",
    tooltip: "Bootstrap",
  },
  {
    icon: <SiJavascript />,
    id: "tooltip-javascript",
    tooltip: "JavaScript",
  },

  {
    icon: <FaReact />,
    id: "tooltip-react",
    tooltip: "React",
  },
  {
    icon: <SiJest />,
    id: "tooltip-jest",
    tooltip: "Jest",
  },
  {
    icon: <FaGitAlt />,
    id: "tooltip-git",
    tooltip: "Git",
  },
];
