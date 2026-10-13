import { useEffect, useRef, useState, useContext } from "react";
import { InfoContext } from "./App";
import "./PodCastPlayer.css";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PauseIcon from "@mui/icons-material/Pause";

export default function PodCastPlayer() {
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState("00:00");
  const [currentTime, setCurrentTime] = useState("00:00");

  let audioRef = useRef(null);

  const { index, setIndex, list } = useContext(InfoContext);

  function time(durr) {
    let min = Math.floor(durr / 60);
    let sec = Math.floor(durr % 60);
    let temp = "";
    if (min < 10) {
      temp = `0${min}:`;
    } else {
      temp = `${min}:`;
    }

    if (sec < 10) {
      temp += `0${sec}`;
    } else {
      temp += `${sec}`;
    }
    return temp;
  }

  useEffect(() => {
    if (!play) return;

    const intervalId = setInterval(() => {
      setCurrentTime(time(audioRef.current.currentTime));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [play]);

  function changeVolume(event) {
    audioRef.current.volume = event.target.value / 10;
  }

  function handlePlay() {
    if (play) {
      setPlay(false);
      audioRef.current.pause();
    } else {
      setPlay(true);
      audioRef.current.play();
    }
  }

  function handleTimeChange(event) {
    const newTime = event.target.value;
    audioRef.current.currentTime = newTime;
    event.target.value = newTime;
    setCurrentTime(time(newTime));
  }

  function handleNext() {
    if (index < list.length - 1) {
      setPlay(false);
      setIndex(index + 1);
    }
  }

  function handlePrev() {
    if (index > 0) {
      setPlay(false);
      setIndex(index - 1);
    }
  }

  return (
    <div className="PodcastPlayer">
      <div className="title">{list[index].title}</div>
      <div className="author">{list[index].author}</div>
      <div>
        <audio
          ref={audioRef}
          src={list[index].source}
          onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        />
      </div>

      <div className="time">
        <div className="current-time"> {currentTime} </div>
        <input
          type="range"
          min={0}
          max={duration}
          onChange={handleTimeChange}
          value={audioRef.current?.currentTime || 0}
        />
        <div className="current-time"> {time(duration)} </div>
      </div>
      <div className="play-options">
        <div className="prev" onClick={handlePrev}>
          <SkipPreviousIcon></SkipPreviousIcon>
        </div>
        <div className="play" onClick={handlePlay}>
          {!play ? (
            <PlayArrowIcon sx={{ fontSize: 50 }}></PlayArrowIcon>
          ) : (
            <PauseIcon sx={{ fontSize: 50 }}></PauseIcon>
          )}
        </div>
        <div className="next" onClick={handleNext}>
          <SkipNextIcon></SkipNextIcon>
        </div>
      </div>
      <div className="volume">
        <VolumeUpIcon></VolumeUpIcon>
        <input type="range" min={0} max={10} onChange={changeVolume} />
      </div>
    </div>
  );
}

// extract the sources list , and from the source all in the information is dynamicly
// use a  state to keep tracke of which index you are in and chose the source of it
