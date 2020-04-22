import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// Styles
import './lib/globalStyles.scss'

// Pages
import HomePage from './pages/Index'
import ContentListPage from './pages/ContentList'
import DetailsPage from './pages/Details'
import CountersPage from './pages/Couters'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/contenidos" component={ContentListPage} />
      <Route path="/contenidos/detalle/:id" component={DetailsPage} />
      <Route exact path="/contadores" component={CountersPage} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

export default App
