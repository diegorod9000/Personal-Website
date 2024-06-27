// import song from "../../../public/Beastie.aif";

function SongEntry(songMetaData) {

	console.log(songMetaData.title)
  return (
    <div id={songMetaData.title} className="Music">
		<h3>{songMetaData.title}</h3>
		<audio controls>
			<source src={process.env.PUBLIC_URL+songMetaData.path} type="audio/mp3"></source>
			Your browser does not support the audio element.
		</audio>
		
    </div>
  );
}

export default SongEntry;