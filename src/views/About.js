import PropTypes from 'prop-types'

import dummyPic from '../assets/imgs/team/dummy.webp'
import '../styles/components/About.css'

const About = ({ DIC }) => {
  const team = [
    {
      firstName: 'Carles',
      lastName: 'del Río',
      photoLink: dummyPic,
      email: 'contact@dev-punk.com',
      position: 'CTO',
      twitterUrl: '',
      linkedInUrl: '',
    },
    {
      firstName: 'Xavier',
      lastName: 'del Río',
      photoLink: dummyPic,
      email: 'contact@dev-punk.com',
      position: 'CEO',
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
