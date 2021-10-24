import PropTypes from 'prop-types'

import Background from './Background'
import bg from '../assets/imgs/bg-main.jpg'
import logo from '../assets/logos/dev-punk-logo_w200.png'

import '../styles/components/Header.css'

const Header = (props) => {
  const { DIC } = props

  return (
    <header className="header-sections">
      <div className="header-titles">
        {/* <h1>{DIC.HEADER_MAIN}</h1> */}
        <img src={logo} alt={DIC.HEADER_MAIN} />
      </div>{' '}
      <div className="header-subtitles">
        <h3>{DIC.SUBDESCRIPTION}</h3>
      </div>
      <Background
        css={'app-header-bg'}
        url={bg}
        label={`${DIC.HEADER_MAIN}, ${DIC.DESCRIPTION}`}
      />
    </header>
  )
}

Header.propTypes = {
  DIC: PropTypes.object.isRequired,
}

export default Header
