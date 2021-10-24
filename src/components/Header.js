import PropTypes from 'prop-types'

import Background from './Background'
import bg from '../assets/imgs/bg-main.jpg'
import logo from '../assets/logos/dev-punk-logo_100.png'

import '../styles/components/Header.css'

const Header = (props) => {
  const { DIC } = props

  return (
    <header className="header-sections">
      <Background
        css={'app-header-bg'}
        url={bg}
        label={`${DIC.HEADER_MAIN}, ${DIC.DESCRIPTION}`}
      />

      <div className="header-tittles">
        <h1>{DIC.HEADER_MAIN}</h1>
        <img src={logo} alt={DIC.HEADER_MAIN} />
        <h2>{DIC.DESCRIPTION}</h2>
        <h2>{DIC.EDITION_CURRENT}</h2>
        <h3>{DIC.SUBDESCRIPTION}</h3>
        {/* <h4 className='mt0 red-text'>{DIC.FORM_CANCELLATION}</h4> */}
      </div>
    </header>
  )
}

Header.propTypes = {
  DIC: PropTypes.object.isRequired,
}

export default Header
