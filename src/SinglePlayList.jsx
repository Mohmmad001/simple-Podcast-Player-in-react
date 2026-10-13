import "./PlayList.css";
import { useContext, useState } from "react";
import { InfoContext } from "./App.jsx";

export default function SinglePlayList({
  obj,
  handleDeletePlayList,
  handlePlaylistClick,
}) {
  let {
    playListID,
    index,
    playList,
    setPlayList,
    podcastList: originalPodcastList,
  } = useContext(InfoContext);

  const [searchTitle, setSearchTitle] = useState("");
  const [result, setResult] = useState(originalPodcastList);

  function handleSearchChange(event) {
    let tempRes = originalPodcastList.filter((pod) => {
      return pod.title.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setResult(tempRes);
    setSearchTitle(event.target.value);
  }

  function addPodcast(podcast, id) {
    let newPlaylist = playList.map((playlist) => {
      if (playlist.id == id) {
        let exists = playlist.podcasts.some((pod) => pod.id == podcast.id);

        if (!exists) {
          return {
            ...playlist,
            podcasts: [...playlist.podcasts, podcast],
          };
        }
      }

      return playlist;
    });

    setSearchTitle(podcast.title);
    setPlayList(newPlaylist);
  }

  return (
    <div className="playlist">
      <div className="playlist-header">
        <div className="playlist-name">{obj.title}</div>

        <button onClick={() => handleDeletePlayList(obj.id)}>Delete</button>
      </div>

      <div className="playlist-list">
        <input
          type="text"
          placeholder="search podcast to add"
          value={searchTitle}
          onChange={handleSearchChange}
        />

        <div className="search-result">
          {result.map((pod) => (
            <div key={pod.id} onMouseDown={() => addPodcast(pod, obj.id)}>
              {pod.title}
            </div>
          ))}
        </div>

        {obj.podcasts.map((pod, i) => (
          <div
            className={`info ${
              i == index && playListID == obj.id ? "active" : ""
            }`}
            key={pod.id}
            onClick={() => handlePlaylistClick(obj, i)}
          >
            <div className="pod-info">
              <div className="title">{pod.title}</div>
              <div className="author">{pod.author}</div>
            </div>

            <div className="duration">{pod.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
