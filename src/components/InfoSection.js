import PropTypes from 'prop-types'

import Button from './Button'

const InfoSection = (props) => {
  const { DIC } = props

  return (
    <section className="app-content pb2rem mb2rem">
      <h1 className="tit-header">{DIC.INFOSEC}</h1>
      <p className="txt-center">{DIC.INFOSEC_TXT}</p>

      <article className="app-column-center">
        <Button label="Encuentra un programador" link="/" external={false} />
      </article>
    </section>
  )
}

InfoSection.propTypes = {
  DIC: PropTypes.object.isRequired,
}

export default InfoSection
