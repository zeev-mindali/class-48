//last.fm api
//https://ws.audioscrobbler.com/2.0/?method=artist.search&api_key=10fab43bb0057766990123f882ec5765&format=json&artist=";

const lastFmURL =
  "https://ws.audioscrobbler.com/2.0/?method=artist.search&api_key=10fab43bb0057766990123f882ec5765&format=json&artist=";

const lyricsURL = "https://api.lyrics.ovh/v1"; //artist/title
const getData = async (artist, song, dataURL) => {
  //console.log(dataURL + artist);
  let myData;
  //console.log("song:", song.length);
  if (song.length === 0) {
    myData = await fetch(dataURL + artist);
  } else {
    //console.log("url: ", `${dataURL}/${artist}/${song}`);
    myData = await fetch(`${dataURL}/${artist}/${song}`);
  }
  let returnData = await myData.json();
  console.log("got data");
  //console.log(returnData.results.artistmatches.artist[0]);
  console.log(returnData);
  return returnData;
};

const artistInfo = new Promise((resolve, reject) => {
  myData = getData("madonna", "", lastFmURL);
  if (!myData) {
    resolve(myData.results.artistmatches.artist[0]);
  }
});

const lyrics = new Promise((resolve, reject) => {
  myData = getData("madonna", "frozen", lyricsURL);
  if (!myData) {
    resolve(myData.lyrics);
  }
});

// artistInfo
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// lyrics
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

Promise.all([artistInfo, lyrics])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
