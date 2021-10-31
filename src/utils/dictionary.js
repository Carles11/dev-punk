const dictionary = {
  es: {
    AVISO_LEGAL_CONTENT: 'Aviso legal',
    ABOUT_TITLE: 'Sobre nosotros',
    DESCRIPTION: 'Programadores de software',
    FORM_NAME: 'Nombre',
    FORM_FIRM: 'Empresa',
    FORM_MESSAGE: 'Deja tu mensaje',
    FORM_PHONE: 'Teléfono',
    FORM_EMAIL: 'Email',
    FORM_STEP: 'Paso',
    HEADER_MAIN: 'devPunk Developers',
    HEADER_TITLE: 'Dev-Punk Developers',
    HEADER_COPYRIGHTS: 'Foto von Anna Tarazevich von Pexels',
    MSG_SEND_ERROR:
      'Lamentablemente no se pudo enviar el formulario, inténtelo más tarde.',
    MORE_INFO: 'Más información',
    NAME: 'devPunk',
    NAV_AVISO_LEGAL: 'Aviso legal',
    NAV_FIND_DEV: 'Encuentra un programador',
    NAV_ABOUT: 'Sobre nosotros',
    NAV_HOW: 'Cómo lo hacemos?',
    NAV_HOME: 'Home',
    NOTFOUND: 'No se ha encontrado la página.',
    NOTFOUND_TXT:
      'Lo sentimos, pero probablemente el link que ha seguido está roto o se ha eliminado la página.',
    SPONSORING_TITLE: 'Cooperación y patrocinio: ',
    SUBDESCRIPTION: 'Encuentra tu programador en nuestras filas',
  },
}

const getDictionary = (lang = 'es') => dictionary[lang]

export default getDictionary
