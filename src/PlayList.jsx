import "./PlayList.css";
import PodCastPlayer from "./PodCastPlayer.jsx";
import SinglePlayList from "./SinglePlayList.jsx";
import { useContext, useState } from "react";
import { InfoContext } from "./App.jsx";

export default function PlayList() {
  let {
    playListID,
    setPlayListID,
    playList,
    setPlayList,
    setList,
    index,
    setIndex,
  } = useContext(InfoContext);

  const [title, setTitle] = useState("");

  function handlePlaylistClick(obj, index) {
    setList(obj.podcasts);
    setPlayListID(obj.id);
    setIndex(index);
  }

  function handleDeletePlayList(id) {
    let newPlayList = playList.filter((obj) => {
      if (obj.id == id) return false;
      return true;
    });

    setPlayList(newPlayList);
  }

  const renderedPlayLists = playList.map((obj) => (
    <SinglePlayList
      key={obj.id}
      obj={obj}
      handleDeletePlayList={handleDeletePlayList}
      handlePlaylistClick={handlePlaylistClick}
    />
  ));

  function handleCreatePlayList() {
    let newID = playList.reduce((maxID, obj) => Math.max(maxID, obj.id), 0);

    setPlayList([...playList, { id: newID + 1, title: title, podcasts: [] }]);

    setTitle("");
  }

  function handeTitleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <div className="playlist-section">
      <PodCastPlayer />

      <div className="main">
        <div className="create-new">
          <div className="title">Create new PlayList</div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              placeholder="PlayList name..."
              value={title}
              onChange={handeTitleChange}
            />

            <button onClick={handleCreatePlayList}>Create</button>
          </div>
        </div>

        <div className="all-playlist">{renderedPlayLists}</div>
      </div>
    </div>
  );
}
