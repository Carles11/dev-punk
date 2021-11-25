import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Logo from '../assets/logos/dev-punk-logo_100.png'

import '../styles/components/Navigation.css'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      redirectTo: '',
      prevScrollpos: window.pageYOffset,
      visibleNav: true,
      location: '',
    }
  }
  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state

    const currentScrollPos = window.pageYOffset
    const visibleNav = prevScrollpos > currentScrollPos
    this.setState({
      prevScrollpos: currentScrollPos,
      visibleNav,
    })
  }

  handleVisibility = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }))
  }

  handleNavigation = (e) => {
    const { name } = e.target

    if (name) {
      const navItem = document.querySelector(`.${name}`)

      navItem !== null &&
        navItem.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
    }

    this.setState({ visible: false })
  }

  render() {
    const { DIC } = this.props
    const { visible, visibleNav } = this.state
    const pageIsHome = window.location.pathname === '/'

    const icon = visible ? 'close' : 'menu'

    const navbarHidden = visibleNav ? '' : 'navbar--hidden'

    const NAV = [
      { label: '', children: [] },
      { label: DIC.NAV_FIND_DEV, href: '/#find-form', children: [] },
      {
        label: DIC.NAV_ABOUT,
        link: '/about',
        children: [],
      },
      { label: DIC.NAV_AVISO_LEGAL, link: '/aviso-legal', children: [] },
    ]

    const List = (
      <ul className={`app-nav-list ${icon}`}>
        <li className={`app-nav-item btn-close `}>
          <Link onClick={this.handleNavigation} to="/" name={'app-landing'}>
            <img name={'app-landing'} src={Logo} alt="devPunk Logo" />
          </Link>
          <button onClick={this.handleVisibility}>
            <span className="txt">CERRAR</span>
            <span className={`icon-x-circle`} />
          </button>
        </li>
        {!pageIsHome && (
          <li
            className={`app-nav-item logo ${
              !pageIsHome ? 'alt-nav-item ' : ''
            }`}
          >
            <Link to="/">
              <img
                onClick={this.handleNavigation}
                data-scroll={true}
                name="app-header"
                src={Logo}
                alt="devPunk logo"
              />
            </Link>
          </li>
        )}
        {NAV.map((item, i) => {
          const label = item.label
          const children = item.children.length
          const section = `app-section-${i}`
          const iconDown = children ? 'item dropdown' : ''

          return (
            <li
              key={label}
              className={`app-nav-item  ${!pageIsHome ? 'alt-nav-item' : ''}`}
            >
              {item.link ? (
                <Link
                  className={iconDown}
                  to={item.link}
                  onClick={this.handleNavigation}
                  name={section}
                >
                  {item?.label?.toUpperCase()}
                </Link>
              ) : item.href ? (
                <a href={item.href}> {item?.label?.toUpperCase()}</a>
              ) : null}
              {!!children && (
                <ul className={`app-subnav-list`}>
                  {item.children?.map((item) => {
                    const link = '/' + item
                    return (
                      <li key={link} className="app-subnav-item">
                        <Link onClick={this.handleVisibility} to={link}>
                          {item?.toUpperCase()}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    )

    const ResponsiveMenu = (
      <div className={`app-respMenu ${icon}`}>
        <Link
          className="btn-close-item"
          onClick={this.handleNavigation}
          to="/"
          name={'app-landing'}
        >
          <img name={'app-landing'} src={Logo} alt="Leo, leo" />
        </Link>
        <button className="btn-menu" onClick={this.handleVisibility}>
          <span className="txt">MENU</span>
          <span className={`icon-menu`} />
        </button>
      </div>
    )

    return (
      <nav className={`app-nav navbar ${navbarHidden} ${icon}`}>
        {!visible && ResponsiveMenu}
        {List}
        <div className={`app-menu-bg ${icon}`} />
      </nav>
    )
  }
}

Navigation.propTypes = {
  DIC: PropTypes.object.isRequired,
}
export default Navigation
