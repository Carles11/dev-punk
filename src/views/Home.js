import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import emailjs, { init } from 'emailjs-com'
import Swal from 'sweetalert2'

import Header from '../components/Header'
import FormComponent from '../components/form/FormComponent'

const Home = ({ DIC }) => {
  const handleSubmit = (data, e) => {
    e.preventDefault()
    const serviceID = 'default_service'
    const templateID = process.env.REACT_APP_EMAIL_Template_ID
    const showName = data.from_name?.split(' ')[0]
    init(process.env.REACT_APP_EMAIL_User_ID)

    emailjs.send(serviceID, templateID, data).then(
      (result) => {
        Swal.fire({
          title: `Gracias, ${showName}!`,
          text: `Gracias, Tu petición ha sido enviada. En breve nos pondremos en contacto contigo. ${result.text}`,
          icon: 'success',
          showConfirmButton: false,
          showCancelButton: true,
          cancelButtonText: 'Cierra',
        })
      },
      (error) => {
        alert('An error occurred, Please try again', error.text)
      },
    )
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
