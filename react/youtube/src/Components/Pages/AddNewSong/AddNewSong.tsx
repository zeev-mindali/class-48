import { useState } from "react";
import "./AddNewSong.css";
import axios from "axios";
import { Song } from "../../../model/song";
import { useNavigate } from "react-router-dom";
import { youtube } from "../../../redux/store";
import { addSongFunction } from "../../../redux/SongReducer";

function AddNewSong(): JSX.Element {
  const API_KEY = "AIzaSyCSNr_wd1yco02Zg3wZLzLV7ByNb5TU0_g";
  const API_ENDPOINT = `https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${API_KEY}&id=`;

  const [songId, setSongId] = useState("");
  const [songName, setSongName] = useState("");
  const [songDesc, setSongDesc] = useState("");
  const [songImageURL, setSongImageURL] = useState("");
  const [songCat, setSongCat] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    axios.get(API_ENDPOINT + songId).then((res) => {
      console.log(res.data.items[0].snippet);
      let songData = res.data.items[0].snippet;
      setSongName(songData.title);
      setSongDesc(songData.description);
      setSongImageURL(songData.thumbnails.standard.url);
    });
  };

  const handleAddSong = () => {
    let songList;
    try {
      songList = JSON.parse(localStorage.getItem("mySongs") || "");
      youtube.dispatch(
        addSongFunction(
          new Song(songId, songName, songDesc, songImageURL, songCat)
        )
      );
    } catch (err) {
      songList = [];
    }
    songList.push(new Song(songId, songName, songDesc, songImageURL, songCat));
    //addSongToList(songList);
    localStorage.setItem("mySongs", JSON.stringify(songList));
    navigate("/");
  };

  const getCat = () => {
    return (
      <>
        <select onChange={(args=>setSongCat(args.currentTarget.value))}>
            {youtube.getState().categories.allCat.map(item=><option>{item}</option>)}
        </select>
      </>
    );
  };

  return (
    <div className="AddNewSong">
      <h1>Add new Song</h1>
      <hr />
      <input
        type="text"
        placeholder="enter song youtube id"
        onKeyUp={(args) => {
          setSongId(args.currentTarget.value);
        }}
      />

      <input type="button" value="search" onClick={handleSearch} />
      <hr />
      <h3>{songName}</h3>
      <br />
      <img src={songImageURL} width={320} />
      <br />
      {songDesc}
      <br />
      <br />
      <br />
      {songDesc.length > 0 && getCat()}<br/><br/>
      {songDesc.length > 0 && (
        <input type="button" value="add song" onClick={handleAddSong} />
      )}
      
    </div>
  );
}

export default AddNewSong;
