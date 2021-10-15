import PropTypes from 'prop-types'
import Button from './Button'

const Footer = (props) => {
  const { DIC, FOOTER_DATA } = props

  const copy = `${new Date().getFullYear()}  ${DIC.HEADER_TITLE}`

  return (
    <footer className="app-footer">
      <div className="app-footer-wrapper w1024">
        <ul className="app-footer-links">
          {FOOTER_DATA.map((item) => (
            <li key={item.label}>
              <Button
                label={item.label}
                link={item.url}
                external={!!item.external}
              />
            </li>
          ))}
          <li>
            <a
              className="btn-link"
              href="mailto:c.cid@hws.schule?subject=Concurso 'Leo, leo... ¿Qué lees?'"
              aria-label="Correo de contacto"
            >
              Contacto
              <span className="line">
                <span />
                <span />
              </span>
            </a>
          </li>
          <li>
            <span>
              &copy;&nbsp;
              {copy}
            </span>
          </li>
        </ul>
        <section className="app-footer-imgs">
          <h3>{DIC.SPONSORING_TITLE}</h3>
          <article>
            {/* <a
              href="https://kultusministerium.hessen.de/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a la página web del Ministerio de cultura de Hessen"
            >
              <img src={logoHessen} alt="Hessen" />
            </a> */}
          </article>
        </section>
      </div>
    </footer>
  )
}
Footer.propTypes = {
  DIC: PropTypes.object.isRequired,
  FOOTER_DATA: PropTypes.array.isRequired,
}
export default Footer
