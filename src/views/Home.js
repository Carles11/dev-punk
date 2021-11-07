import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import Swal from 'sweetalert2'

import Header from '../components/Header'
import FormComponent from '../components/form/FormComponent'

const Home = ({ DIC }) => {
  const handleSubmit = (data, e) => {
    e.preventDefault()
    console.log('DATADDD', data)
    Swal.fire({
      title: `Gracias, ${data.firstName}!`,
      text: 'Tu petición ha sido enviada. En breve nos pondremos en contacto contigo.',
      icon: 'success',
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: 'Cierra',
    })
    window.scrollTo(0, 0)
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

      <FormComponent DIC={DIC} handleSubmit={handleSubmit} />
    </>
  )
}

Home.propTypes = {
  DIC: PropTypes.object.isRequired,
}

export default Home
