import PropTypes from 'prop-types'

const Step3 = (props) => {
  if (props.currentStep !== 3) {
    return null
  }
  const { handleChange, DIC, developers, languages, technologies } = props
  return (
    <>
      <div className="question">
        <label htmlFor="developers">{DIC.FORM_DEVELOPERS}</label>
        <input
          className="form-control"
          id="developers"
          name="developers"
          type="number"
          placeholder={DIC.FORM_DEVELOPERS_PH}
          value={developers}
          onChange={handleChange}
        />
      </div>
      <div className="question">
        <label htmlFor="languages">{DIC.FORM_LANGUAGES}</label>
        <input
          className="form-control"
          id="languages"
          name="languages"
          type="text"
          placeholder={DIC.FORM_LANGUAGES_PH}
          value={languages}
          onChange={handleChange}
        />
      </div>
      <div className="question">
        <label htmlFor="technologies">{DIC.FORM_TECHNOLOGIES}</label>
        <input
          className="form-control"
          id="technologies"
          name="technologies"
          type="text"
          placeholder={DIC.FORM_TECHNOLOGIES_PH}
          value={technologies}
          onChange={handleChange}
        />
      </div>
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
