export default function Catalog() {
    return (
        <div className="body">
  <div className="background-blur" />
  <div className="music-cards-container">
    {/* Music Card 1 */}
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
    {/* Music Card 2 */}
    <div className="music-card">
      <div className="flipping-container">
        <div className="image-container">
          <img
            src="https://raw.githubusercontent.com/workofaditya/Interactive-Cards/refs/heads/main/assets/No-Surprises.png"
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
      <h2 className="song-title">No Surprises</h2>
      <p className="artist-name">Radio Head</p>
    </div>
    {/* Music Card 3 */}
    <div className="music-card">
      <div className="flipping-container">
        <div className="image-container">
          <img
            src="https://raw.githubusercontent.com/workofaditya/Interactive-Cards/refs/heads/main/assets/One-Love.png"
            alt="One Love"
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
      <h2 className="song-title">One Love</h2>
      <p className="artist-name">Shubh</p>
    </div>
    {/* Music Card 4 */}
    <div className="music-card">
      <div className="flipping-container">
        <div className="image-container">
          <img
            src="https://raw.githubusercontent.com/workofaditya/Interactive-Cards/refs/heads/main/assets/Tu-hai-kahan.png"
            alt="Tu hai kahan"
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
      <h2 className="song-title">Tu Hai Kahan</h2>
      <p className="artist-name">AUR</p>
    </div>
  </div>
</div>

    );
}