const dictionary = {
  es: {
    AVISO_LEGAL_ADDRESS:
      'C/ Fuenterrabía 6, esc. centro, 2° izq., 28014 Madrid, Espana',
    AVISO_LEGAL_CIF: 'B86815503',
    AVISO_LEGAL_CONTENT: 'aviso legal',
    AVISO_LEGAL_EMAIL: 'contact@dev-punk.com',
    AVISO_LEGAL_NAME: 'SOMCINC WORLD S.L.',
    AVISO_LEGAL_SITIO: 'www.dev-punk.com',
    AVISO_LEGAL_TITLE: 'Aviso legal',
    ABOUT_TITLE: 'Sobre nosotros',
    ABOUT_DESCRIPTION_A:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    ABOUT_DESCRIPTION_B:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    BUTTON_NEXT: 'Siguiente',
    BUTTON_PREVIOUS: 'Anterior',
    BUTTON_SUBMIT: 'Enviar',
    DESCRIPTION: 'Programadores de software',
    FORM_DEVELOPERS: '¿Cuántos programadores necesitas?',
    FORM_DEVELOPERS_PH: 'Número de programadores',
    FORM_EMAIL_PH: 'Correo electrónico',
    FORM_EMAIL: 'Te enviaremos nuestra oferta a este correo',
    FORM_FIRM: '¿Contactas en nombre de una empresa?',
    FORM_FIRM_PH: 'Empresa',
    FORM_LANGUAGES: '¿Qué lenguajes de programación debe dominar el candidato?',
    FORM_LANGUAGES_PH: 'Lenguajes de programación',
    FORM_NAME: '¿Cuál es tu nombre?',
    FORM_NAME_PH: 'Nombre y apellidos',
    FORM_MESSAGE: 'Deja tu mensaje',
    FORM_MESSAGE_PH: 'Escribe aquí',
    FORM_PHONE: 'Si deseas agilizar el proceso, deja un teléfono',
    FORM_PHONE_PH: 'Teléfono',
    FORM_STEP: 'Paso',
    FORM_TECHNOLOGIES: '¿Con qué framework deberá trabajar?',
    FORM_TECHNOLOGIES_PH: 'Tecnologías',
    FORM_TITLE: 'Rellena este formulario y te contactaremos en 24 horas',
    HEADER_MAIN: 'devPunk Developers',
    HEADER_TITLE: 'Dev-Punk Developers',
    HEADER_COPYRIGHTS: 'Foto de Anna Tarazevich en Pexels',
    MSG_SEND_ERROR:
      'Lamentablemente no se pudo enviar el formulario, inténtelo más tarde.',
    MORE_INFO: 'Más información',
    NAME: 'devPunk',
    NAV_AVISO_LEGAL: 'Aviso legal',
    NAV_FIND_DEV: 'inicio',
    NAV_ABOUT: 'Sobre nosotros',
    NAV_HOW: '¿Cómo lo hacemos?',
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
