import { Switch, Route } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={(props) => <Home props={props} />} />
      <Route path="/admin" component={(props) => <About props={props} />} />
    </Switch>
  )
}
export default Routes
