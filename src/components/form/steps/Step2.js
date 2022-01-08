import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import { renderField } from '../../../redux/redux-form/renderFields'

const Step2 = (props) => {
  if (props.currentStep !== 2) {
    return null
  }
  const { DIC } = props
  return (
    <>
      <Field
        id="email"
        type="text"
        name="email"
        label={DIC.FORM_EMAIL}
        className="question"
        component={renderField}
        placeholder={DIC.FORM_EMAIL_PH}
        value={props.email}
        onChange={props.handleChange}
      />

      <Field
        id="phone"
        type="number"
        name="phone"
        label={DIC.FORM_PHONE}
        className="question question-long"
        component={renderField}
        placeholder={DIC.FORM_PHONE_PH}
        value={props.phone}
        onChange={props.handleChange}
      />
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
