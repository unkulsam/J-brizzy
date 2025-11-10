import React from "react";
import "./ArtistBioPage.css";
import GalleryPage from "./GalleryPage";

const ArtistBioPage = () => {
  const artist = {
    name: "J-BRIZZY",
    genre: "Hip-Hop and More",
    label: "Street Music Vibe (S.M.V)",
    occupations: "Rapper, Songwriter, Businessman, Actor",
    years_active: "2016",
    works: {
      na_salone_we_comot:
        "https://audiomack.com/jay-brizzy99/song/na-salone-we-comout",
      the_game: "The Game",
      underage: "Underage",
    },
    birth_year: "1997",
    birth_month: "October",
    birth_day: "10",
    location: "The Gambia",
    bio: `John Bangura (also known as Jay-Brizzy or 99) was born on October 10, 1997, in Lumbley, Western Freetown, Sierra Leone. He grew up with his father in the city of Freetown.

99 began his music career around 2008, initially writing songs and acting. In 2015, he moved to The Gambia to stay with his mother. That marked the beginning of his professional music journey, and he recorded his first song titled "Don't Judge the Book by Its Cover."

On August 10, 2016, Jay-Brizzy tragically lost his mother to an illness that lasted only three days. He paused his music for a while and ventured into business. In 2018, he returned to the music scene as a professional artist, launching his own label, Street Music Vibe.

Under this label, he released songs such as:
- Na Salone We Comot
- Underage
- The Game
- Pick Up the Pen

99 is a sensational artist, open and eager to collaborate with different musicians.`,
    coverImage: "./jb.jpeg",
    socials: {
      instagram:
        "https://www.instagram.com/jaybrizzy_official?igsh=MXY1dnVyZTZiNXhrMA==",
      tiktok:
        "https://www.tiktok.com/@jaybrizzyninetyni?_r=1&_t=ZS-91HW6GCEOim",
      facebook: "https://www.facebook.com/share/1CVJnQxyj6/",
    },
  };

  return (
    <div className="artist-bio-page">
      <div className="cover-container">
        <img src={artist.coverImage} alt="Cover" className="cover-image" />
        {/* <img src={artist.profileImage} alt="Profile" className="profile-image" /> */}
      </div>

      <header className="artist-header">
        <h1>{artist.name}</h1>
        <h2>Label: {artist.label}</h2>
        <p>
          Genre: {artist.genre} · Location: {artist.location}
        </p>
        <p>Occupations: {artist.occupations}</p>

        <h2>Projects</h2>
        <a
          href={artist.works.na_salone_we_comot}
          target="_blank"
          rel="noopener noreferrer"
        >
          Na Salone We Comot
        </a>
        <p>{artist.works.the_game}</p>
        <p>{artist.works.underage}</p>
      </header>

      <section className="artist-bio">
        <div id="gallery">
          <GalleryPage />
        </div>

        <div id="about" className="about">
          <h2>About</h2>
          <p>{artist.bio}</p>
        </div>

        <div className="dateofbirth">
          <h2>Date of Birth</h2>
          <p>Year: {artist.birth_year}</p>
          <p>Month: {artist.birth_month}</p>
          <p>Day: {artist.birth_day}</p>
        </div>
      </section>

      <footer id="footer" className="artist-footer">
        <div className="artist-info">
          <h2>Contact Me </h2>
          <div class="socials">
            <a
              href={artist.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href={artist.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tik Tok
            </a>
            <a
              href={artist.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>

          <p>
            © {new Date().getFullYear()} Street Music Vibe (S.M.V). All rights
            reserved.
          </p>
        </div>
        <div className="developer">
          <h4>Developer's Info</h4>
          <a href="mailto:sammargaijr@gmail.com">Email</a>
          <p>Contact: 2400707</p>
        </div>
      </footer>
    </div>
  );
};

export default ArtistBioPage;
