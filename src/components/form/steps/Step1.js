import PropTypes from 'prop-types'

const Step1 = (props) => {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder="Enter email"
        value={props.email}
        onChange={props.handleChange}
      />
    </div>
  )
}

Step1.propTypes = {
  currentStep: PropTypes.number,
  email: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
}
export default Step1
