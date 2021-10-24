const dictionary = {
  es: {
    AVISO_LEGAL_CONTENT: 'Aviso legal',
    ABOUT_TITLE: 'Sobre nosotros',
    DESCRIPTION: 'Programadores de software',
    SUBDESCRIPTION: 'Encuentra tu programador en nuestras filas',
    HEADER_MAIN: 'devPunk Developers',
    HEADER_TITLE: 'Dev-Punk Developers',
    MSG_SEND_ERROR:
      'Lamentablemente no se pudo enviar el formulario, inténtelo más tarde.',
    MORE_INFO: 'Más información',
    NAME: 'devPunk',
    NAV_AVISO_LEGAL: 'Datenschutzerklärung',
    NAV_ABOUT: 'Sobre nosotros',
    NAV_HOME: 'Home',
    NOTFOUND: 'No se ha encontrado la página.',
    NOTFOUND_TXT:
      'Lo sentimos, pero probablemente el link que ha seguido está roto o se ha eliminado la página.',
    SPONSORING_TITLE: 'Cooperación y patrocinio: ',
  },
}

const getDictionary = (lang = 'es') => dictionary[lang]

export default getDictionary
