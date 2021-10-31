import PropTypes from 'prop-types'

const Step3 = (props) => {
  if (props.currentStep !== 3) {
    return null
  }
  const { DIC } = props
  return (
    <div className="form-group">
      <label htmlFor="message">Email address</label>
      <input
        className="form-control"
        id="message"
        name="message"
        type="text"
        placeholder={DIC.FORM_MESSAGE}
        value={props.message}
        onChange={props.handleChange}
      />
    </div>
  )
}

Step3.propTypes = {
  currentStep: PropTypes.number,
  message: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  DIC: PropTypes.object,
}

export default Step3
