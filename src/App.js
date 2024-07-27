import './App.css';

function SpaceBlobs() {
  // Generate random values for the good and bad blobs
  const getRandomBlobValues = (numberOfBlobs, delayInSeconds) => {
    const blobValues = {
      translateX: [],
      angle: [],
      scale: [],
      delay: [],
    };

    const { translateX, angle, scale, delay } = blobValues;

    for (let i = 0; i < numberOfBlobs; i++) {
      translateX.push(Math.floor((Math.random() - 0.5) * 80));
      angle.push(Math.floor(Math.random() * 90) - 45);
      scale.push((Math.random() * 100) / 200 + 0.9);
      delay.push(i * delayInSeconds);
    }

    return blobValues;
  };

  const goodBlobs = getRandomBlobValues(21, 0.8);
  const badBlobs = getRandomBlobValues(8, 2.3);

  console.log({ badBlobs });
  return (
    <form className="gameContainer">
      {/* Radio button hack for 'state management' */}
      <input type="radio" name="screen" id="start" checked />
      <input type="radio" name="screen" id="info" />
      <input type="radio" name="screen" id="game" />
      <input type="radio" name="screen" id="end" />

      <div className="screen screenStart">
        <h1>fabulab space blobs!</h1>
        <div className="buttonLabelContainer">
          <label htmlFor="game" className="buttonLabel">
            <p>start game</p>
          </label>
          <label htmlFor="info" className="buttonLabel">
            <p>info</p>
          </label>
        </div>
      </div>

      <div className="screen screenGame guiContainer">
        <div className="blob goodBlobs">
          {goodBlobs.translateX.map((_, index) => {
            const { translateX, angle, scale, delay } = goodBlobs;
            return (
              <input
                type="radio"
                className="goodBlob"
                style={{
                  '--translateX': `${translateX[index]}vmin`,
                  '--angle': `${angle[index]}deg`,
                  '--scale': `${scale[index]}`,
                  '--delay': `${delay[index]}s`,
                }}
              />
            );
          })}
        </div>

        <div className="badBlobs">
          {badBlobs.translateX.map((_, index) => {
            const { translateX, angle, scale, delay } = badBlobs;
            return (
              <input
                type="radio"
                className="blob badBlob"
                style={{
                  '--translateX': `${translateX[index]}vmin`,
                  '--angle': `${angle[index]}deg`,
                  '--scale': `${scale[index]}`,
                  '--delay': `${delay[index]}s`,
                }}
              />
            );
          })}
        </div>

        <div className="gui">
          <div className="timer">
            <span></span>s
          </div>
          <div className="score">score: </div>
        </div>
      </div>

      <div className="screen screenEnd">
        <div className="buttonLabelContainer">
          <button
            className="buttonLabel"
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();
            }}
          >
            <p>play again?</p>
          </button>
        </div>
      </div>

      <div className="screen screenInfo">
        <p className="infoText">
          <span className="good">green</span> space blobs good | +1 pt
        </p>
        <p className="infoText bad">
          <span className="bad">pink</span> space blobs bad | -2 pts
        </p>
        <label htmlFor="start" className="buttonLabel">
          <p>back</p>
        </label>
      </div>
    </form>
  );
}

export default SpaceBlobs;
