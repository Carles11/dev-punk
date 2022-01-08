import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import { renderField } from '../../../redux/redux-form/renderFields'

const Step4 = (props) => {
  if (props.currentStep !== 4) {
    return null
  }
  const { DIC } = props
  return (
    <Field
      id="message"
      type="text"
      name="message"
      label={DIC.FORM_MESSAGE}
      className="question"
      component={renderField}
      placeholder={DIC.FORM_MESSAGE_PH}
      value={props.message}
      onChange={props.handleChange}
    />
  )
}

Step4.propTypes = {
  currentStep: PropTypes.number,
  message: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  DIC: PropTypes.object,
}

export default Step4
