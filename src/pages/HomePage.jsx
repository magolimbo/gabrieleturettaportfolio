import React, {useState} from 'react';
import { Link } from 'react-router-dom'; // Import Link da react-router-dom
import myLogo from '../../public/g-logo.svg';
import { HashLink } from 'react-router-hash-link';
import backgroundVideo from '../assets/bg-video.mp4'; // Import del video


const HomePage = () => {
    // Stato per gestire la categoria selezionata
  const [selectedCategory, setSelectedCategory] = useState('graphicDesign');

  // Dati dei progetti
  const projects = {
    graphicDesign: [
      { id: 1, title: 'Graphic Design Project 1', description: 'Description for graphic design project 1', image: 'path/to/image1.jpg' },
      { id: 2, title: 'Graphic Design Project 2', description: 'Description for graphic design project 2', image: 'path/to/image2.jpg' },
    ],
    computerScience: [
      { id: 1, title: 'Computer Science Project 1', description: 'Description for computer science project 1', image: 'path/to/image3.jpg' },
      { id: 2, title: 'Computer Science Project 2', description: 'Description for computer science project 2', image: 'path/to/image4.jpg' },
    ],
  };
  return (
    <div className="main-container">
        {/* Navbar */}
        <header className="navbar">
          <nav>
            <ul>
              <li><Link to="/about">About</Link></li>
              <div className="projects-link">
                    <li><HashLink smooth to="#projects">Projects</HashLink></li>
              </div>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        {/* Fullscreen Hero Section */}
        <section className="hero" id="home">
             {/* Video di background */}
            <video className="video-bg" src={backgroundVideo} autoPlay loop muted />
        </section>

        {/* Projects Section */}
        <section className="projects" id="projects">
            {/* Categorie */}
            <div className="project-categories">
                <button onClick={() => setSelectedCategory('graphicDesign')}>Graphic Design</button>
                <button onClick={() => setSelectedCategory('computerScience')}>Computer Science</button>
            </div>

            {/* Elenco dei progetti */}
            <div className="project-list">
                {projects[selectedCategory].map(project => (
                    <div key={project.id} className="project-item">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>

        <footer className="footer">
          <nav>
            <ul>
              <li><Link to="/about">Gabriele Turetta</Link></li>
              {/* Rotating Icon instead of the down arrow */}
              <li className="spinner">
                <img src={myLogo} alt="Rotating icon" width="30" height="30" />
              </li>
              <li><Link to="/contact">København 2024</Link></li>
            </ul>
          </nav>
        </footer>
    
    </div>
  );
};

export default HomePage;

