import "./PodCastlist.css";
import { useContext } from "react";
import { InfoContext } from "./App.jsx";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

export default function PodCastlist() {
  const { index, setIndex, list } = useContext(InfoContext);

  function handleChangePodCast(value) {
    setIndex(value);
  }

  const podCastlist = list.map((obj, i) => {
    return (
      <div
        className={`podcast ${index === i ? "active" : ""}`}
        key={obj.id}
        onClick={() => {
          handleChangePodCast(i);
        }}
      >
        <div className="podcast-info">
          <div>{obj.title}</div>
          <div>{obj.author}</div>
          <div>{obj.duration}</div>
        </div>

        <div className="status">
          <PlayArrowIcon sx={{ fontSize: 40 }}></PlayArrowIcon>
        </div>
      </div>
    );
  });

  return (
    <div className="podcast-list">
      <div className="podcast-nums">All podcast ({list.length})</div>
      <div className="list">{podCastlist}</div>
    </div>
  );
}
