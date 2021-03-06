import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = (props) => {
  const { link, label, type, external, css, fn, disabled } = props

  const span = (
    <span className="line">
      <span />
      <span />
    </span>
  )

  switch (external) {
    case false:
      return (
        <Link className={`btn-link ${css}`} aria-label={label} to={link}>
          {label}
          {span}
        </Link>
      )
    case true:
      return (
        <a
          className={`btn-link ${css}`}
          aria-label={label}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {label}
          {span}
        </a>
      )
    default:
      return (
        <button
          onClick={fn}
          type={type}
          aria-label={label}
          className={`btn ${css}`}
          disabled={disabled}
        >
          {label}
        </button>
      )
  }
}

Button.defaultProps = {
  css: '',
  type: 'button',
  fn: () => {},
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  external: PropTypes.bool,
  type: PropTypes.string,
  link: PropTypes.string,
  css: PropTypes.string,
  fn: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Button
