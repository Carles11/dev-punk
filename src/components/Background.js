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
    const { css, label, url } = this.props
    const render = this.state.render ? 'app-background-render' : ''

    return (
      <figure className={`app-background ${css} ${render}`}>
        <img src={url} alt={label} />
      </figure>
    )
  }
}

Background.propTypes = {
  css: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string.isRequired,
}

export default Background
