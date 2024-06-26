function SongEntry(songMetaData) {

	console.log(songMetaData.title)
  return (
    <div id={songMetaData.title} className="Music">
		<h3>{songMetaData.title}</h3>
		<audio controls>
			<source src={songMetaData.path} type="audio/aiff"></source>
		</audio>
		
    </div>
  );
}

export default SongEntry;