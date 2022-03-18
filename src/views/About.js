import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// import dummyPic from '../assets/imgs/team/dummy.webp'
import xaviPic from '../assets/imgs/team/Xavi.jpg'
import charliePic from '../assets/imgs/team/Carles.webp'
import '../styles/components/About.css'

const About = ({ DIC }) => {
  const [apiResponse, setApiResponse] = useState(null)

  const callAPI = () => {
    fetch('http://localhost:9000/testAPI')
      .then((res) => res.text())
      .then((res) => setApiResponse(res))
  }

  useEffect(() => {
    callAPI()
  })
  const team = [
    {
      firstName: 'Carles',
      lastName: 'del Río',
      photoLink: charliePic,
      email: 'contact@dev-punk.com',
      position: 'CTO & Founder',
      twitterUrl: '',
      linkedInUrl: '',
    },
    {
      firstName: 'Xavi',
      lastName: 'del Río',
      photoLink: xaviPic,
      email: 'contact@dev-punk.com',
      position: 'CEO & Founder',
      twitterUrl: '',
      linkedInUrl: '',
    },
  ]

  return (
    <div className="about-section">
      <div className="section-title">
        <h2>{DIC.ABOUT_TITLE}</h2>
        <p>{DIC.ABOUT_DESCRIPTION_A}</p>
        <p>{DIC.ABOUT_DESCRIPTION_B}</p>
      </div>
      <h1>{apiResponse}</h1>
      <div className="cards-section">
        {team.map((member, i) => {
          return (
            <div key={i} className="cards-team-member">
              <div className="cards-team-main-info">
                <img
                  src={member.photoLink}
                  alt="dev-punk team member profile picture"
                />
                <div className="cards-team-main-data">
                  <div className="cards-team-main-name">
                    {member.firstName} &nbsp;
                    {member.lastName}
                  </div>
                  <div className="cards-team-main-position">
                    {member.position}
                  </div>
                  <div className="cards-team-main-email">
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </div>
                </div>
              </div>
              <div className="cards-team-social-links">
                <div className="twitter">
                  <i className="fab fa-twitter-square fa-2x"></i>
                  {member.twitterUrl}
                </div>
                <div className="linkedin">
                  <i className="fab fa-linkedin fa-2x"></i>
                  {member.linkedInUrl}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
About.propTypes = {
  DIC: PropTypes.object.isRequired,
}
export default About
