import { useState } from 'react'

import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import FormComponent from '../components/form/FormComponent'

const Home = ({ DIC }) => {
  const [showSent, setShowSent] = useState(false)
  const handleSubmit = (data, e) => {
    e.preventDefault()
    console.log('DATADDD', data)
    setShowSent(true)
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
      {showSent && 'SENT'}
      <FormComponent DIC={DIC} handleSubmit={handleSubmit} />
    </>
  )
}

Home.propTypes = {
  DIC: PropTypes.object.isRequired,
}

export default Home
