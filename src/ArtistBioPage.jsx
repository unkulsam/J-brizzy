import React, { useState, useEffect } from "react";
import GalleryPage from "./GalleryPage";
import {
  Music,
  MapPin,
  Calendar,
  Instagram,
  Facebook,
  Send,
  ChevronDown,
  Play,
  ExternalLink,
} from "lucide-react";
import "./ArtistBioPage.css";

const ArtistBioPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const artist = {
    name: "J-BRIZZY",
    aka: "99",
    genre: "Hip-Hop and More",
    label: "Street Music Vibe (S.M.V)",
    occupations: ["Rapper", "Songwriter", "Businessman", "Actor"],
    years_active: "2016",
    works: [
      {
        title: "Na Salone We Comot",
        url: "https://audiomack.com/jay-brizzy99/song/na-salone-we-comout",
        featured: true,
      },
      { title: "The Game", url: null },
      { title: "Underage", url: null },
      { title: "Pick Up the Pen", url: null },
    ],
    birth: "October 10, 1997",
    location: "The Gambia",
    bio: `John Bangura (also known as Jay-Brizzy or 99) was born on October 10, 1997, in Lumbley, Western Freetown, Sierra Leone. He grew up with his father in the city of Freetown.

99 began his music career around 2008, initially writing songs and acting. In 2015, he moved to The Gambia to stay with his mother. That marked the beginning of his professional music journey, and he recorded his first song titled "Don't Judge the Book by Its Cover."

On August 10, 2016, Jay-Brizzy tragically lost his mother to an illness that lasted only three days. He paused his music for a while and ventured into business. In 2018, he returned to the music scene as a professional artist, launching his own label, Street Music Vibe.`,
    socials: {
      instagram:
        "https://www.instagram.com/jaybrizzy_official?igsh=MXY1dnVyZTZiNXhrMA==",
      tiktok:
        "https://www.tiktok.com/@jaybrizzyninetyni?_r=1&_t=ZS-91HW6GCEOim",
      facebook: "https://www.facebook.com/share/1CVJnQxyj6/",
    },
  };

  const headerOpacity = Math.min(scrollY / 300, 0.95);

  return (
    <div className="artist-mobile-container">
      {/* Hero Section with Parallax */}
      <div className="hero-section">
        <div
          className="hero-background"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-blur"></div>
        </div>

        {/* Floating Header */}
        <div
          className="floating-header"
          style={{
            backgroundColor: `rgba(0, 0, 0, ${headerOpacity})`,
            backdropFilter: headerOpacity > 0.5 ? "blur(10px)" : "none",
          }}
        >
          <div className="header-content">
            <div className="header-logo">{artist.name}</div>
            <div className="header-socials">
              <a
                href={artist.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="social-icon" />
              </a>
              <a
                href={artist.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="social-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-text">
            <div className="aka-badge">
              <span className="aka-text">aka {artist.aka}</span>
            </div>
            <h1 className="hero-title">{artist.name}</h1>
            <p className="hero-label">{artist.label}</p>
            <div className="hero-genre">
              <Music className="genre-icon" />
              <span>{artist.genre}</span>
            </div>
            <div className="occupations-list">
              {artist.occupations.map((occ, i) => (
                <span key={i} className="occupation-badge">
                  {occ}
                </span>
              ))}
            </div>
          </div>

          <ChevronDown className="scroll-indicator" />
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Latest Tracks</h2>

          <div className="tracks-list">
            {artist.works.map((work, i) => (
              <div key={i} className="track-card">
                <div className="track-content">
                  <div className="track-info">
                    <div className="play-button">
                      <Play className="play-icon" fill="white" />
                    </div>
                    <div>
                      <h3 className="track-title">{work.title}</h3>
                      {work.featured && (
                        <span className="featured-badge">
                          Featured Apostlos
                        </span>
                      )}
                    </div>
                  </div>
                  {work.url && (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="external-link"
                    >
                      <ExternalLink className="link-icon" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <GalleryPage />
      {/* Bio Section */}
      <div className="bio-section">
        <div className="section-container">
          <h2 className="section-title bio-title">The Journey</h2>

          <div className="bio-card">
            <div className="info-row">
              <div className="info-icon birth-icon">
                <Calendar className="icon" />
              </div>
              <div>
                <p className="info-label">Born</p>
                <p className="info-value">{artist.birth}</p>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon location-icon">
                <MapPin className="icon" />
              </div>
              <div>
                <p className="info-label">Based in</p>
                <p className="info-value">{artist.location}</p>
              </div>
            </div>

            <p className="bio-text">{artist.bio}</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="section-container">
          <h2 className="section-title contact-title">Let's Connect</h2>

          <div className="social-links">
            <a
              href={artist.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram-link"
            >
              <div className="social-link-content">
                <div className="social-link-info">
                  <Instagram className="social-link-icon" />
                  <span className="social-link-text">Instagram</span>
                </div>
                <ExternalLink className="social-link-arrow" />
              </div>
            </a>

            <a
              href={artist.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link facebook-link"
            >
              <div className="social-link-content">
                <div className="social-link-info">
                  <Facebook className="social-link-icon" />
                  <span className="social-link-text">Facebook</span>
                </div>
                <ExternalLink className="social-link-arrow" />
              </div>
            </a>

            <a
              href={artist.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link tiktok-link"
            >
              <div className="social-link-content">
                <div className="social-link-info">
                  <Send className="social-link-icon" />
                  <span className="social-link-text">TikTok</span>
                </div>
                <ExternalLink className="social-link-arrow" />
              </div>
            </a>
          </div>

          {/* Developer Info */}
          <div className="footer-card">
            <p className="copyright">
              © {new Date().getFullYear()} Street Music Vibe (S.M.V). All rights
              reserved.
            </p>
            <div className="developer-info">
              <p className="developer-label">Website Developer</p>
              <a
                href="mailto:sammargaijr@gmail.com"
                className="developer-email"
              >
                sammargaijr@gmail.com
              </a>
              <p className="developer-contact">Contact: 2400707</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistBioPage;
