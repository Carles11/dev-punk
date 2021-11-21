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
  submitButton() {
    const { DIC } = this.props

    let currentStep = this.state.currentStep
    if (currentStep === 4) {
      return (
        <Button
          css="btn-invert btn-submit"
          label={DIC.BUTTON_SUBMIT}
          type="submit"
        />
      )
    }
    return null
  }

  submitData = (e) => {
    const { handleSubmit } = this.props
    const {
      firstName,
      firm,
      message,
      email,
      phone,
      developers,
      languages,
      technologies,
    } = this.state

    const data = {
      firstName,
      firm,
      message,
      email,
      phone,
      developers,
      languages,
      technologies,
    }
    handleSubmit(data, e)
  }

  render() {
    const { DIC } = this.props
    const {
      currentStep,
      firstName,
      firm,
      message,
      email,
      phone,
      developers,
      languages,
      technologies,
    } = this.state
    return (
      <div id="find-form" className="steps-form">
        <div className="form-header">
          <h1>{DIC.FORM_TITLE}</h1>
          <p>
            {' '}
            {DIC.FORM_STEP}: {currentStep} / 4{' '}
          </p>
        </div>
        <form
          onSubmit={(e) => {
            this.submitData(e)
          }}
        >
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
            developers={developers}
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
          <div className="btn-last-flex">
            {this.previousButton()}
            {this.nextButton()}
            {this.submitButton()}
          </div>
        </form>
      </div>
    )
  }
}

FormComponent.propTypes = {
  DIC: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
}

export default FormComponent
