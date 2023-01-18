import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// hooks
import { useTheme } from './hooks/useTheme'
// components
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'

function App() {
  const { mode } = useTheme()

  return (
    <div className={`App ${mode}`}>
      <Router>
        <Navbar />
        <ThemeSelector />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/recipes/:id" component={Recipe} />
          <Route path="/search" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
