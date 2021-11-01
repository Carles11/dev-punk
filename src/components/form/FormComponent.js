import { Component } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button.js'
import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import Step4 from './steps/Step4'

import '../../styles/components/form/FormComponent.css'

class FormComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      firstName: '',
      firm: '',
      message: '',
      email: '',
      phone: null,
      developers: 0,
      languages: '',
      technologies: '',
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { email, firstName, password } = this.state
    console.log('handleSubmitted', email, firstName, password)
  }

  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 3 ? 4 : currentStep + 1
    this.setState({
      currentStep: currentStep,
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep,
    })
    console.log('PREPREPRVEEVEVEVEE', currentStep)
  }

  previousButton() {
    const { DIC } = this.props
    let currentStep = this.state.currentStep
    if (currentStep !== 1) {
      return (
        <Button
          css="btn-invert"
          label={DIC.BUTTON_PREVIOUS}
          type="button"
          fn={this._prev}
        />
      )
    }
    return null
  }

  nextButton() {
    const { DIC } = this.props
    let currentStep = this.state.currentStep
    if (currentStep < 4) {
      return (
        <Button
          css="btn-invert btn-margin-left"
          label={DIC.BUTTON_NEXT}
          type="button"
          fn={this._next}
        />
      )
    }
    return null
  }

  render() {
    const {
      email,
      firstName,
      firm,
      currentStep,
      message,
      phone,
      developers,
      languages,
      technologies,
    } = this.state
    const { DIC } = this.props
    return (
      <div id="find-form" className="steps-form">
        <div className="form-header">
          <h1>Rellena este formulario y te contactaremos en 24 horas.</h1>
          <p>
            {' '}
            {DIC.FORM_STEP}: {currentStep} / 3{' '}
          </p>
        </div>
        <form onSubmit={this.handleSubmit}>
          {/* 
        render the form steps and pass required props in
      */}
          <Step1
            currentStep={currentStep}
            handleChange={this.handleChange}
            firstName={firstName}
            firm={firm}
            DIC={DIC}
          />
          <Step2
            currentStep={currentStep}
            handleChange={this.handleChange}
            email={email}
            phone={phone}
            DIC={DIC}
          />
          <Step3
            currentStep={currentStep}
            handleChange={this.handleChange}
            develoopers={developers}
            languages={languages}
            technologies={technologies}
            DIC={DIC}
          />
          <Step4
            currentStep={currentStep}
            handleChange={this.handleChange}
            message={message}
            DIC={DIC}
          />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </div>
    )
  }
}

FormComponent.propTypes = {
  DIC: PropTypes.object,
}

export default FormComponent
