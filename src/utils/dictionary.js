const dictionary = {
  es: {
    AVISO_LEGAL_CONTENT: 'Aviso legal',
    ABOUT_TITLE: 'Sobre nosotros',
    BUTTON_NEXT: 'Siguiente',
    BUTTON_PREVIOUS: 'Anterior',
    BUTTON_SUBMIT: 'Enviar',
    DESCRIPTION: 'Programadores de software',
    FORM_DEVELOPERS: 'Cuántos programadores precisas?',
    FORM_DEVELOPERS_PH: 'Número de programadores',
    FORM_EMAIL_PH: 'Correo electrónico',
    FORM_EMAIL: 'Te enviaremos nuestra oferta a este correo',
    FORM_FIRM: 'Contactas en nombre de una empresa?',
    FORM_FIRM_PH: 'Empresa',
    FORM_LANGUAGES: 'Qué lenguajes de programación debe dominar el candidato?',
    FORM_LANGUAGES_PH: 'Lenguajes de programación',
    FORM_NAME: 'Cuál es tu nombre?',
    FORM_NAME_PH: 'Nombre y apellidos',
    FORM_MESSAGE: 'Deja tu mensaje',
    FORM_MESSAGE_PH: 'Escribe aquí',
    FORM_PHONE: 'Si deseas agilizar el proceso, deja un teléfono',
    FORM_PHONE_PH: 'Teléfono',
    FORM_TECHNOLOGIES:
      'Qué tecnologías o frameworks debe dominar el programador que buscas?',
    FORM_TECHNOLOGIES_PH: 'Tecnologíass',
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
