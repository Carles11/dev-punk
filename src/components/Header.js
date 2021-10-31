import PropTypes from 'prop-types'

import ScrollMeIcon from '../components/ScrollMeIcon'

import Background from './Background'
import bg from '../assets/imgs/bg-main.jpg'
import logo from '../assets/logos/dev-punk-logo_w200.png'

import '../styles/components/Header.css'

const Header = (props) => {
  const { DIC } = props

  return (
    <header className="header-sections">
      <div className="header-logo ">
        {/* <h1>{DIC.HEADER_MAIN}</h1> */}
        <img
          className="flicker-in-glow"
          src={logo}
          alt={DIC && DIC.HEADER_MAIN}
        />
      </div>{' '}
      {/* <div className="header-subtitles">
        <h3>{DIC && DIC.SUBDESCRIPTION}</h3>
      </div> */}
      <div className="header-copyrights">
        <p>{DIC && DIC.HEADER_COPYRIGHTS}</p>
      </div>
      <ScrollMeIcon />
      <Background
        css={'app-header-bg'}
        url={bg}
        label={`${DIC && DIC.HEADER_MAIN}, ${DIC && DIC.DESCRIPTION}`}
      />
    </header>
  )
}

Header.propTypes = {
  DIC: PropTypes.object.isRequired,
}

export default Header
