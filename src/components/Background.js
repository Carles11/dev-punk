import React from 'react'
import PropTypes from 'prop-types'

import '../styles/components/Background.css'

class Background extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      render: false,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ render: true }))
  }

  render() {
    const { css, label, url, DIC } = this.props
    const render = this.state.render ? 'app-background-render' : ''

    return (
      <figure className={` app-background   ${css} ${render}`}>
        <div>
          <h1 className="img-bg-title">{DIC.MAIN_TITLE}</h1>
        </div>
        <img className="bottom-right-effect" src={url} alt={label} />
      </figure>
    )
  }
}

Background.propTypes = {
  css: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string.isRequired,
  DIC: PropTypes.object.isRequired,
}

export default Background
