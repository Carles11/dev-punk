import PropTypes from 'prop-types'

import { STEPS_DATA } from '../../utils/constants'

import '../../styles/components/StepsSection.css'

const StepsSection = () => {
  console.log('STEPS_DATA', STEPS_DATA)
  return (
    <div className="step-frame">
      {STEPS_DATA.map((step) => {
        return (
          <div key={`key_${step.title}`} className="step-box">
            <h1>{step.title}</h1>
            <img src={`${step.iconSrc}`} alt={step.iconAlt} />

            <h3>{step.description}</h3>
          </div>
        )
      })}
    </div>
  )
}

StepsSection.propTypes = {
  STEPS_DATA: PropTypes.array.isRequired,
}

export default StepsSection
