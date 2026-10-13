import "./Header.css";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { InfoContext } from "./App";

export default function Header() {
  const [buttonState, setButtonState] = useState(true);
  const { podcastList, setList } = useContext(InfoContext);
  return (
    <div className="header">
      <div className="title">
        <PodcastsIcon sx={{ fontSize: 30 }}></PodcastsIcon>
        Podcast Player
      </div>

      <div className="options">
        <Link to={"/"}>
          <button
            className={buttonState ? "active" : ""}
            onClick={() => {
              setButtonState(true);
              setList(podcastList);
            }}
            style={{ backgroundColor: "transparent" }}
          >
            All Podcasts
          </button>
        </Link>

        <Link to={"/playlist"}>
          <button
            className={!buttonState ? "active" : ""}
            onClick={() => {
              setButtonState(false);
            }}
            style={{ backgroundColor: "transparent" }}
          >
            PlayLists
          </button>
        </Link>
      </div>
    </div>
  );
}
