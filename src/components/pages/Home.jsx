export default function Home() {
    return (
      <>
       <div className="Card">
            <div className="CardInner">
                <label>Search for your favourite music</label>
                <div className="container">
                <div className="Icon">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#657789"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
            >
          <circle cx={11} cy={11} r={8} />
          <line x1={21} y1={21} x2="16.65" y2="16.65" />
            </svg>
            </div>
      <div className="InputArea">
        <input placeholder="search artist..." />
      </div>
    </div>
  </div>
</div>

<div className="music-card-container">
<div className="music-card">
      <div className="flipping-container">
        <div className="image-container">
          <img
            src="https://raw.githubusercontent.com/workofaditya/Interactive-Cards/refs/heads/main/assets/husn.png"
            alt="Husn"
            className="cover-image"
          />
        </div>
        <div className="card-back">
          <button className="play-button">Play</button>
          <div className="progress-bar-container">
            <div className="progress-bar" />
          </div>
        </div>
      </div>
      <h2 className="song-title">Husn</h2>
      <p className="artist-name">Anuv Jain</p>
    </div>
    </div>
      </>
    );
}