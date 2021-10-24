import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import ScrollMeIcon from '../components/ScrollMeIcon'
import FormComponent from '../components/form/FormComponent'

const Home = ({ DIC }) => {
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
      <ScrollMeIcon />
      <FormComponent DIC={DIC} />
    </>
  )
}

Home.propTypes = {
  DIC: PropTypes.object.isRequired,
}

export default Home
