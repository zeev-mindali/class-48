import { useEffect, useState } from "react";
import "./SongList.css";
import { Song } from "../../../model/song";
import SingleSong from "../SingleSong/SingleSong";
import { youtube } from "../../../redux/store";
import { downloadSongAction } from "../../../redux/SongReducer";
import { addCatFunction, downloadCatAction } from "../../../redux/CatReducer";
import { useParams } from "react-router-dom";

function SongList(): JSX.Element {
  const [songList, setSongList] = useState<Song[]>([]);
  const [songCat, setCat] = useState("");
  const params = useParams();
  console.log(params.catName);
  setCat(params.catName?.toString() || "");
  useEffect(() => {
    if (youtube.getState().songs.allSongs.length < 1) {
      try {
        let mySongs = JSON.parse(localStorage.getItem("mySongs") || "");
        if (mySongs.length > 0) {
          if (params.catName != undefined) {
            mySongs= [...mySongs].filter(item=>item==songCat);
            setSongList(mySongs);
          } else {
            setSongList(mySongs);
          }
          console.log(mySongs);
          console.log("send songs to redux");
          youtube.dispatch(downloadSongAction(mySongs));
        }
      } catch (err) {
        console.log("there is no songs in the system");
      }
      //console.log(mySongs);

      //   }
    }
    if (youtube.getState().categories.allCat.length < 1) {
      try {
        let myCategories = JSON.parse(localStorage.getItem("cat") || "");
        if (myCategories.length > 0) {
          youtube.dispatch(downloadCatAction(myCategories));
        } else {
          youtube.dispatch(addCatFunction("default"));
        }
      } catch (err) {
        youtube.dispatch(addCatFunction("default"));
      }
    }
  }, []);
  return (
    <div className="SongList">
      <h1>our song list, we will use map</h1>
      <hr />
      {youtube.getState().songs.allSongs.map((item, index) => (
        <SingleSong key={index} item={item} />
      ))}
    </div>
  );
}

export default SongList;
