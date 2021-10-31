import PropTypes from 'prop-types'

const Step1 = (props) => {
  if (props.currentStep !== 1) {
    return null
  }
  const { DIC } = props
  return (
    <>
      <div className="question">
        <label htmlFor="firstName">{DIC.FORM_NAME}</label>
        <input
          className=""
          id="firstName"
          name="firstName"
          type="text"
          placeholder={DIC.FORM_NAME_PH}
          value={props.firstName}
          onChange={props.handleChange}
        />
      </div>
      <div className="question">
        <label htmlFor="firm">{DIC.FORM_FIRM}</label>
        <input
          className=""
          id="firm"
          name="firm"
          type="text"
          placeholder={DIC.FORM_FIRM_PH}
          value={props.firm}
          onChange={props.handleChange}
        />
      </div>
    </>
  )
}

Step1.propTypes = {
  currentStep: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
  firstName: PropTypes.string,
  firm: PropTypes.string,
  DIC: PropTypes.object,
}
export default Step1
