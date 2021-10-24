import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import Home from './views/Home'
import About from './views/About'

const Routes = ({ DIC }) => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={(props) => <Home props={props} DIC={DIC} />}
      />
      <Route
        path="/about-us"
        component={(props, { DIC }) => <About props={props} DIC={DIC} />}
      />
    </Switch>
  )
}

Routes.propTypes = {
  DIC: PropTypes.object.isRequired,
}
export default Routes
