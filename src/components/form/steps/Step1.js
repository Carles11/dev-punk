import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { renderField } from '../../../redux/redux-form/renderFields'
import { required, minLength2 } from '../../../utils/validations'
const Step1 = (props) => {
  if (props.currentStep !== 1) {
    return null
  }
  const { DIC } = props
  return (
    <>
      <Field
        id="fullName"
        type="text"
        name="fullName"
        className="question"
        label={DIC.FORM_NAME}
        component={renderField}
        placeholder={DIC.FORM_NAME_PH}
        value={props.fullName}
        onChange={props.handleChange}
        validate={[required, minLength2]}
      />

      <Field
        id="firm"
        name="firm"
        type="text"
        className="question question-long"
        component={renderField}
        placeholder={DIC.FORM_FIRM_PH}
        label={DIC.FORM_FIRM}
        value={props.firm}
        onChange={props.handleChange}
        validate={[required, minLength2]}
      />
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
