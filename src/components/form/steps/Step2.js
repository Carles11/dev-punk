import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import {
  renderField,
  // renderPhoneNumberField,
} from '../../../redux/redux-form/renderFields'
import { required } from '../../../redux/redux-form/validations'

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
        validate={[required]}
      />

      {/* <Field
        id="phone"
        type="tel"
        name="phone"
        label={DIC.FORM_PHONE}
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        className="question question-long"
        component={renderPhoneNumberField}
        placeholder={DIC.FORM_PHONE_PH}
        value={props.phone}
        onChange={props.handleChange}
        validate={[number]}
      /> */}
      <div className="question">
        <label htmlFor="phone">{DIC.FORM_PHONE}</label>
        <PhoneInput
          country="es"
          value={props.phone}
          onChange={props.handleChange}
          preferredCountries={['us', 'gb', 'fr', 'de', 'es', 'it']}
          isValid={(value, country) => {
            if (value.match(/12345/)) {
              return 'Número inválido: ' + value + ', ' + country.name
            } else if (value.match(/1234/)) {
              return false
            } else {
              return true
            }
          }}
        />
      </div>
    </>
  )
}

Step2.propTypes = {
  currentStep: PropTypes.number,
  email: PropTypes.string,
  phone: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  DIC: PropTypes.object,
}
export default Step2
