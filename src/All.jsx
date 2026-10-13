import "./App.css";
import PodCastPlayer from "./PodCastPlayer.jsx";
import PodCastList from "./PodCastList.jsx";

export default function All() {
  return (
    <div className="podcast-section">
      <PodCastPlayer />
      <PodCastList />
    </div>
  );
}
