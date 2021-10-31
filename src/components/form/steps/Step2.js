import PropTypes from 'prop-types'

const Step2 = (props) => {
  if (props.currentStep !== 2) {
    return null
  }
  const { DIC } = props
  return (
    <div className="form-group">
      <label htmlFor="email">Nombre</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
        placeholder={DIC.FORM_EMAIL}
        value={props.email}
        onChange={props.handleChange}
      />
      <label htmlFor="secondName">Nombre</label>
      <input
        className="form-control"
        id="secondName"
        name="secondName"
        type="text"
        placeholder={DIC.FORM_PHONE}
        value={props.phone}
        onChange={props.handleChange}
      />
    </div>
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
