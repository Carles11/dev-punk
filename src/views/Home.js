import PropTypes from 'prop-types'

import Helmet from 'react-helmet'

import emailSend from '../utils/email'
import Header from '../components/Header'
import InfoSection from '../components/InfoSection'
import FormComponent from '../components/form/FormComponent'

const Home = ({ DIC }) => {
  const handleSubmit = (data, e) => {
    e.preventDefault()
    emailSend(data)
  }

  return (
    <>
      <Helmet
        title={DIC.DESCRIPTION}
        meta={[
          { name: 'description', content: `${DIC.DESCRIPTION}` },
          { property: 'og:title', content: `${DIC.DESCRIPTION}` },
        ]}
      />
      <Header DIC={DIC} />
      <InfoSection DIC={DIC} />
      <FormComponent DIC={DIC} handleSubmit={handleSubmit} />
    </>
  )
}

Home.propTypes = {
  DIC: PropTypes.object.isRequired,
}

export default Home
