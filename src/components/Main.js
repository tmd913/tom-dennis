import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import freakyStyley from '../images/freaky-styley.png'
import healthyHeads from '../images/healthy-heads.png'
import cuisintry from '../images/cuisintry.png'
import pug from '../images/pug.png'
import pokemon from '../images/pokemon.png'
import giphy from '../images/giphy.png'
import trivia from '../images/trivia.png'
import starWars from '../images/star-wars.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image headshot">
            <img src={pic01} alt="" />
          </span>
          <p>
            Hi! My name is Tom, and I was born and raised in Wyomissing, PA
            (about an hour NW of Philadelphia). Throughout my childhood I was
            always a bit of a nerd, especially when it came to technology.
            Phones, computers, videogame consoles, and any other electronics I
            could get my hands on fascinated me, but although I loved various
            forms of technology, I never really understood how they worked.
          </p>
          <p>
            I got my first major exposure to the software on these devices
            during an introductory Computer Science course my sophomore year at
            the University of Richmond, and I liked the material so much that I
            decided to major in Computer Science. This decision ended up being a
            great one, as I learned a ton of fundamental coding skills and
            became a much better problem solver, but even after three years as a
            Computer Science major I still didn’t know how to build a real world
            software application. Despite doing well in my classes, I began to
            mistakenly doubt my abilities as a developer and I ultimately
            decided to pursue a consulting job after graduation rather than
            enter the technology industry.
          </p>
          <p>
            My first job in consulting led me to Washington, DC, and although
            after about a year I realized that consulting lacked the creativity
            that I enjoyed most as a Computer Science major, I did learn a lot
            about myself throughout the process and ended up in a city that I
            love. With the support of my family and friends I decided once again
            to pursue my goal of becoming a software developer by completing
            George Washington University's Web Development Bootcamp, an
            invaluable experience that augmented my academic knowledge as a
            Computer Science major with hands on exposure to full-stack web
            application development.
          </p>
          <p>
            I now know that there was no reason to ever doubt myself as a
            developer, all I needed was a push in the right direction.
            Technology is my passion, and I am hopeful and excited that I will
            soon find my dream job using the skills that I have developed
            throughout the past several years!
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <h3>Freaky-Styley</h3>
          <span className="image main">
            <img src={freakyStyley} alt="Freaky-Styley Screenshot" />
          </span>
          <p>
            <strong>Description: </strong> Uses machine learning to transfer
            style from an image model to an input image of the user's choice.
            Saves each image created into a community section where users can
            vote on their favorite art.
          </p>
          <p>
            <strong>Technology Used: </strong> Javascript, React, MongoDB, Node,
            Express, Bootstrap, Passport, ml5, Paperspace, Cloudinary
          </p>
          <p>
            <strong>Links: </strong>
            <a
              href="https://github.com/tmd913/image-style-transfer"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Github
            </a>
            <span> | </span>
            <a
              href="http://freaky-styley-brt2.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Deployed
            </a>
          </p>
          <hr />
          <h3>Healthy Heads</h3>
          <span className="image main">
            <img src={healthyHeads} alt="Healthy Heads Screenshot" />
          </span>
          <p>
            <strong>Description: </strong> Platform for finding mental health
            professionals using detailed search parameters and review
            functionality.
          </p>
          <p>
            <strong>Technology Used: </strong> Javascript, mySQL, Node, Express,
            Handlebars, Materialize, Passport
          </p>
          <p>
            <strong>Links: </strong>
            <a
              href="https://github.com/tmd913/project2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Github
            </a>
            <span> | </span>
            <a
              href="https://healthy-heads.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Deployed
            </a>
          </p>
          <hr />
          <h3>Cuisintry</h3>
          <span className="image main">
            <img src={cuisintry} alt="Cuisintry Screenshot" />
          </span>
          <p>
            <strong>Description: </strong> Discover more information about your
            favorite countries, including local restaurants serving their
            cuisines.
          </p>
          <p>
            <strong>Technology Used: </strong> Javascript, jQuery, HTML5/CSS3,
            Materialize, Pure.css, Animate.css, Zomato API, Countries API, Web
            Scraping
          </p>
          <p>
            <strong>Links: </strong>
            <a
              href="https://github.com/tmd913/project0"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Github
            </a>
            <span> | </span>
            <a
              href="https://tmd913.github.io/project0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Deployed
            </a>
          </p>
          <hr />
          <h3>Pug Playlists</h3>
          <span className="image main">
            <img src={pug} alt="Pug Playlists Screenshot" />
          </span>
          <p>
            <strong>Description: </strong> Collaborative Spotify listening room
            where multiple users can search Spotify for songs and add them to a
            group queue that will play through the moderator's device.
          </p>
          <p>
            <strong>Technology Used: </strong> Javascript, Node, Express,
            Socket.io, Spotify API, OAuth, Materialize
          </p>
          <p>
            <strong>Links: </strong>
            <a
              href="https://github.com/tmd913/project1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Github
            </a>
            <span> | </span>
            <a
              href="https://pug-playlists.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Deployed
            </a>
          </p>
          <hr />
          <h3>Who's That Pokemon?</h3>
          <span className="image main">
            <img src={pokemon} alt="Who's That Pokemon? Screenshot" />
          </span>
          <p>
            <strong>Description: </strong> Try to guess the name of the Pokemon.
            There are four difficulties, each with different battle and victory
            songs, that change the amount of guesses you get per game.
          </p>
          <p>
            <strong>Technology Used: </strong> Javascript (vanilla), HTML5/CSS3
            (vanilla)
          </p>
          <p>
            <strong>Links: </strong>
            <a
              href="https://github.com/tmd913/word-guess-game"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Github
            </a>
            <span> | </span>
            <a
              href="https://tmd913.github.io/word-guess-game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Deployed
            </a>
          </p>
          <hr />
          <h3>Gif Generator</h3>
          <span className="image main">
            <img src={giphy} alt="Gif Generator Screenshot" />
          </span>
          <p>
            <strong>Description: </strong> Dynamically add movies or shows to
            the list of suggestions, each of which generates 10 gifs using the
            Giphy API when clicked. You can then add more gifs in sets of 10 by
            clicking the add button.
          </p>
          <p>
            <strong>Technology Used: </strong> Javascript, jQuery, Giphy API,
            Bootstrap
          </p>
          <p>
            <strong>Links: </strong>
            <a
              href="https://github.com/tmd913/giphy-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Github
            </a>
            <span> | </span>
            <a
              href="https://tmd913.github.io/giphy-api/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Deployed
            </a>
          </p>
          <hr />
          <h3>Trivia Game</h3>
          <span className="image main">
            <img src={trivia} alt="Trivia Game Screenshot" />
          </span>
          <p>
            <strong>Description: </strong> Test your football knowledge in this
            25 question trivia game. There is a time limit of 15 seconds per
            question so answer quickly!
          </p>
          <p>
            <strong>Technology Used: </strong> Javascript, jQuery, JSON,
            Bootstrap
          </p>
          <p>
            <strong>Links: </strong>
            <a
              href="https://github.com/tmd913/TriviaGame"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Github
            </a>
            <span> | </span>
            <a
              href="https://tmd913.github.io/TriviaGame/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Deployed
            </a>
          </p>
          <hr />
          <h3>Star Wars RPG</h3>
          <span className="image main">
            <img src={starWars} alt="Star Wars RPG Screenshot" />
          </span>
          <p>
            <strong>Description: </strong> Star Wars themed click-based RPG,
            where each character has a specified base attack, counter attack,
            and number of health points. Each time you attack, your current
            attack is increased by your characers base attack. Defeat all three
            opponents to win.
          </p>
          <p>
            <strong>Technology Used: </strong> Javascript, jQuery, Bootstrap
          </p>
          <p>
            <strong>Links: </strong>
            <a
              href="https://github.com/tmd913/star-wars-rpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Github
            </a>
            <span> | </span>
            <a
              href="https://tmd913.github.io/star-wars-rpg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Deployed
            </a>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <p>
            <strong>Web Development: </strong> Javascript, Node, Express,
            jQuery, React, HTML5/CSS3, REST APIs, Heroku, Bootstrap, Materialize
          </p>
          <p>
            <strong>Databases: </strong> SQL, MS SQL Server, mySql, MongoDB,
            Sequelize, Mongoose
          </p>
          <p>
            <strong>Miscellaneous: </strong> Git/Github, Java, macOS, Windows,
            Microsoft Office Suite, Google Suite, Tableau
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            Please feel free to email or call me if you're interested in
            discussing my work and/or skills! I am actively seeking employment
            as a web developer, and I am always willing to learn new
            technologies in addition to the ones I have already demonstrated
            experience with. I look forward to speaking with you!
          </p>
          <p>
            <strong>Address: </strong> 2021 O St NW, Washington, DC 20036
          </p>
          <p>
            <strong>Phone: </strong> (610) 603-6345
          </p>
          <p>
            <strong>Email: </strong> thomas.dennis@richmond.edu
          </p>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/tmd913"
                className="icon fa-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tom-dennis-6b41357a/"
                className="icon fa-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:thomas.dennis@richmond.edu"
                className="icon fa-at"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
