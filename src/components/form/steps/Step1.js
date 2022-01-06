import PropTypes from 'prop-types'
import { Field } from 'redux-form'

const Step1 = (props) => {
  if (props.currentStep !== 1) {
    return null
  }
  const { DIC } = props
  return (
    <>
      {' '}
      <div className="question">
        <label htmlFor="firstName">{DIC.FORM_NAME}</label>
        <Field
          name="fullName"
          component="input"
          id="fullName"
          type="text"
          placeholder={DIC.FORM_NAME_PH}
          value={props.fullName}
          onChange={props.handleChange}
        />
      </div>
      {/* <div className="question">
        <label htmlFor="fullName">{DIC.FORM_NAME}</label>
        <input
          className=""
          id="fullName"
          name="fullName"
          type="text"
          placeholder={DIC.FORM_NAME_PH}
          value={props.fullName}
          onChange={props.handleChange}
        />
      </div> */}
      <div className="question question-long">
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
  fullName: PropTypes.string,
  firm: PropTypes.string,
  DIC: PropTypes.object,
}
export default Step1
