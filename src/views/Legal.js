import PropTypes from 'prop-types'

import '../styles/components/Legal.css'

const Legal = ({ DIC }) => {
  return (
    <div className="legal-section">
      <h2>{DIC.AVISO_LEGAL_TITLE}</h2>
    </div>
  )
}

Legal.propTypes = {
  DIC: PropTypes.object.isRequired,
}
export default Legal
