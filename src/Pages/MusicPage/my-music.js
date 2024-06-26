import SongEntry from "./songEntry.js";
import songContent from "./MusicPageContent.json";

function MusicPage() {
  let songElements = [];
  for (var songId = 0; songId<songContent.content.length; songId++){
    // console.log(songContent.content[song])
    songElements.push(SongEntry(songContent.content[songId]));
  }

  return (
    <div id="MusicPage" className="Music">
      <h1>{songContent.header.title}</h1>
      {songElements}
    </div>
  );
}

export default MusicPage;