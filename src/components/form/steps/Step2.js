import PropTypes from 'prop-types'

const Step2 = (props) => {
  if (props.currentStep !== 2) {
    return null
  }
  const { DIC } = props
  return (
    <>
      <div className="question">
        <label htmlFor="email">{DIC.FORM_EMAIL}</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder={DIC.FORM_EMAIL_PH}
          value={props.email}
          onChange={props.handleChange}
        />
      </div>
      <div className="question">
        <label htmlFor="secondName">{DIC.FORM_PHONE}</label>
        <input
          className="form-control"
          id="secondName"
          name="secondName"
          type="text"
          placeholder={DIC.FORM_PHONE_PH}
          value={props.phone}
          onChange={props.handleChange}
        />
      </div>
    </>
  )
}

Step2.propTypes = {
  currentStep: PropTypes.number,
  email: PropTypes.string,
  phone: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
  DIC: PropTypes.object,
}
export default Step2
