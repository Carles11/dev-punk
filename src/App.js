import Helmet from 'react-helmet'
import { Provider } from 'react-redux'
import store from './redux/configureStore'

import Routes from './Routes'

import getDictionary from './utils/dictionary'
import { FOOTER_DATA } from './utils/constants'

import Footer from './components/Footer'
import Navigation from './components/Navigation'

const DIC = getDictionary()
import './App.css'

const App = (props) => (
  <Provider store={store}>
    <Helmet
      titleTemplate={`%s | ${DIC.NAME} - ${DIC.DESCRIPTION}`}
      defaultTitle={`${DIC.NAME} - ${DIC.DESCRIPTION}`}
    >
      <meta name="description" content={DIC.DESCRIPTION} />
    </Helmet>
    <Navigation {...props} DIC={DIC} />

    <Routes {...props} DIC={DIC} />
    <Footer DIC={DIC} FOOTER_DATA={FOOTER_DATA} />
  </Provider>
)

export default App
