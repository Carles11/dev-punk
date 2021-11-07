import PropTypes from 'prop-types'
// import Button from '../../Button.js'

const Step4 = (props) => {
  if (props.currentStep !== 4) {
    return null
  }
  const { DIC } = props
  return (
    <div className="question">
      <label htmlFor="message">{DIC.FORM_MESSAGE}</label>
      <input
        className="form-control"
        id="message"
        name="message"
        type="text"
        placeholder={DIC.FORM_MESSAGE_PH}
        value={props.message}
        onChange={props.handleChange}
      />
    </div>
  )
}

Step4.propTypes = {
  currentStep: PropTypes.number,
  message: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  DIC: PropTypes.object,
}

export default Step4
