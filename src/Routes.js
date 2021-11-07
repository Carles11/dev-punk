import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import Home from './views/Home'
import About from './views/About'
import Legal from './views/Legal'

const Routes = ({ DIC }) => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={(props) => <Home props={props} DIC={DIC} />}
      />
      <Route
        path="/about"
        component={(props) => <About props={props} DIC={DIC} />}
      />
      <Route
        path="/aviso-legal"
        component={(props) => <Legal props={props} DIC={DIC} />}
      />
    </Switch>
  )
}

Routes.propTypes = {
  DIC: PropTypes.object.isRequired,
}
export default Routes
