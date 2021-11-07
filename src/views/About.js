import PropTypes from 'prop-types'

import '../styles/components/About.css'

const About = ({ DIC }) => {
  return (
    <div className="about-section">
      <h2>{DIC.ABOUT_TITLE}</h2>
      <p>{DIC.ABOUT_DESCRIPTION}</p>
    </div>
  )
}
About.propTypes = {
  DIC: PropTypes.object.isRequired,
}
export default About
