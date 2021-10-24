import Button from '../Button.js'
import Slider from 'react-slick'
import '../../styles/components/form/FormComponent.css'

const FormComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }
  return (
    <div className="form">
      <div className="form-header">
        {' '}
        <h1>Rellena este formulario y te contactaremos en 48 horas</h1>
      </div>
      {/* <form className="form-body"> */}
      <Slider {...settings}>
        <div className="form-inputs">
          <input />
          fgarggagg
          <input />
          <Button label="envía" />
        </div>
        <div className="form-inputs">
          <input />
          agawegewgwaeegrgwgarg
          <input />
          <Button label="envía" />
        </div>
      </Slider>
      {/* </form> */}
    </div>
  )
}

export default FormComponent
