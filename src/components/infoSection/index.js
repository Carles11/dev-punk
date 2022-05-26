import PropTypes from 'prop-types'

import StepsSection from './StepsSection'
import '../../styles/components/InfoSection.css'

const InfoSection = (props) => {
  const { DIC } = props

  return (
    <section className="infosec-bg mb2rem">
      <h1 className="tit-header">{DIC.INFOSEC}</h1>
      {/* <p className="txt-center">{DIC.INFOSEC_TXT}</p> */}
      <StepsSection />
    </section>
  )
}

InfoSection.propTypes = {
  DIC: PropTypes.object.isRequired,
}

export default InfoSection
