import PropTypes from 'prop-types'
import { Field } from 'redux-form'

import { renderField } from '../../../redux/redux-form/renderFields'
import { number } from '../../../redux/redux-form/validations'

const Step3 = (props) => {
  if (props.currentStep !== 3) {
    return null
  }
  const { handleChange, DIC, developers, languages, technologies } = props

  return (
    <>
      <Field
        id="developers"
        type="number"
        name="developers"
        label={DIC.FORM_DEVELOPERS}
        className="question question-long"
        component={renderField}
        placeholder={DIC.FORM_FORM_DEVELOPERS_PH}
        value={developers}
        onChange={handleChange}
        validate={[number]}
      />
      <Field
        id="languages"
        type="text"
        name="languages"
        label={DIC.FORM_LANGUAGES}
        className="question question-extra-long"
        component={renderField}
        placeholder={DIC.FORM_LANGUAGES_PH}
        value={languages}
        onChange={handleChange}
      />
      <Field
        id="technologies"
        type="text"
        name="technologies"
        label={DIC.FORM_TECHNOLOGIES}
        className="question question-long"
        component={renderField}
        placeholder={DIC.FORM_TECHNOLOGIES_PH}
        value={technologies}
        onChange={handleChange}
      />
    </>
  )
}

Step3.propTypes = {
  currentStep: PropTypes.number,
  languages: PropTypes.string,
  technologies: PropTypes.string,
  phone: PropTypes.number,
  developers: PropTypes.number,
  handleChange: PropTypes.func.isRequired,
  DIC: PropTypes.object,
}
export default Step3
