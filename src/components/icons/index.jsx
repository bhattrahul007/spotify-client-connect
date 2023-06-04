import Home from "./Home";
import Search from "./Search";
import Library from "./Library";
import Create from "./Create";
import Like from "./Like";
import Install from "./Install";
import Back from "./Back";
import Forward from "./Forward";
import NSearch from "./NSearch";
import Heart from "./Heart";
import Play from "./Play";
import Music from "./Music";
import Music2 from "./Music2";
import CD from "./CD";
import TrackBack from "./TrackBack";
import TrackNext from "./TrackNext";
import Shuffle from "./Shuffle";
import Repeat from "./Repeat";
import Speaker from "./Speaker";
import Volume from "./Volume";
import Pause from "./Pause";

import React from "react";

export default function Icon(props) {
  switch (props.name) {
    case "Home":
      return <Home />;
    case "Search":
      return <Search />;
    case "Library":
      return <Library />;
    case "Create":
      return <Create />;
    case "Heart":
      return <Heart {...props} />;
    case "Like":
      return <Like {...props} />;
    case "Install":
      return <Install {...props} />;
    case "Back":
      return <Back />;
    case "Forward":
      return <Forward />;
    case "N-Search":
      return <NSearch />;
    case "Play":
      return <Play {...props} />;
    case "Music":
      return <Music />;
    case "Music2":
      return <Music2 />;
    case "CD":
      return <CD />;
    case "TrackBack":
      return <TrackBack />;
    case "TrackNext":
      return <TrackNext />;
    case "Shuffle":
      return <Shuffle />;
    case "Repeat":
      return <Repeat />;
    case "Speaker":
      return <Speaker />;
    case "Volume":
      return <Volume />;
    case "Pause":
      return <Pause />;
    default:
      return null;
  }
}
