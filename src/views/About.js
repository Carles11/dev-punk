import PropTypes from 'prop-types'

import dummyPic from '../assets/imgs/team/dummy.webp'
import '../styles/components/About.css'

const About = ({ DIC }) => {
  const team = [
    {
      firstName: 'Carles',
      lastName: 'del Río',
      photoLink: dummyPic,
      position: 'CTO',
      twitterUrl: '',
      linkedInUrl: '',
    },
    {
      firstName: 'Xavier',
      lastName: 'del Río',
      photoLink: dummyPic,
      position: 'CEO',
      twitterUrl: '',
      linkedInUrl: '',
    },
    {
      firstName: 'Mark',
      lastName: 'Zückerberg',
      photoLink: dummyPic,
      position: 'Investor',
      twitterUrl: '',
      linkedInUrl: '',
    },
  ]

  return (
    <div className="about-section">
      <div className="section-title">
        <h2>{DIC.ABOUT_TITLE}</h2>
        <p>{DIC.ABOUT_DESCRIPTION}</p>
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
                </div>
              </div>
              <div className="cards-team-social-links">
                <div className="twitter">{member.twitterUrl}</div>
                <div className="linkedin">{member.linkedInUrl}</div>
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
