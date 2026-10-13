import "./App.css";
import All from "./All.jsx";
import PlayList from "./PlayList.jsx";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Container from "./Container.jsx";

const podcastList = [
  {
    id: 1,
    title: "Optimize buissness google profile",
    source: "/podcasts/podcast1.mp3",
    author: "30 dasy challenge",
    duration: "5:40",
  },
  {
    id: 2,
    title: "The AI in buissness",
    source: "/podcasts/podcast2.mp3",
    author: "AI buisness",
    duration: "27:32",
  },
  {
    id: 3,
    title: "Accounting podcast",
    source: "/podcasts/podcast3.mp3",
    author: "pwc",
    duration: "38:23",
  },
  {
    id: 4,
    title: "How to Buy the Right Dream Home",
    source: "/podcasts/podcast4.mp3",
    author: "Murabae podcast",
    duration: "01:02:07",
  },
];

export const PlayLists = [
  {
    id: 1,
    title: "playlist1",
    podcasts: [
      {
        id: 1,
        title: "Optimize buissness google profile",
        source: "/podcasts/podcast1.mp3",
        author: "30 dasy challenge",
        duration: "5:40",
      },
      {
        id: 2,
        title: "The AI in buissness",
        source: "/podcasts/podcast2.mp3",
        author: "AI buisness",
        duration: "27:32",
      },
    ],
  },
  {
    id: 2,
    title: "playlist2",
    podcasts: [
      {
        id: 3,
        title: "Accounting podcast",
        source: "/podcasts/podcast3.mp3",
        author: "pwc",
        duration: "38:23",
      },
      {
        id: 4,
        title: "How to Buy the Right Dream Home",
        source: "/podcasts/podcast4.mp3",
        author: "Murabae podcast",
        duration: "01:02:07",
      },
    ],
  },
];

export const InfoContext = createContext(null);

function App() {
  const [index, setIndex] = useState(0);
  const [playList, setPlayList] = useState(PlayLists);
  const [list, setList] = useState(podcastList);
  const [playListID, setPlayListID] = useState(null);
  const [originalPodcastList, setPodCastList] = useState(podcastList);

  return (
    <BrowserRouter>
      <InfoContext.Provider
        value={{
          index,
          setIndex,
          playList,
          setPlayList,
          list,
          setList,
          playListID,
          setPlayListID,
          podcastList: originalPodcastList,
          setPodCastList,
        }}
      >
        <Container>
          <Header />

          <Routes>
            <Route index element={<All />} />
            <Route path="/playlist" element={<PlayList />} />
          </Routes>
        </Container>
      </InfoContext.Provider>
    </BrowserRouter>
  );
}

export default App;
