import React, { Suspense, lazy } from 'react';
import './App.scss';
import { Link, NavLink, Switch, Route, useLocation } from 'react-router-dom';
import BookShelf from './apps/bookshelf/BookShelf';
import HooksVerse from './apps/hooks-verse/HooksVerse';

const AnimalShelter = lazy(() => import('./apps/animal-shelter/AnimalShelter'));
const MadProps = lazy(() => import('./apps/mad-props/MadProps'));
const UseEffect = lazy(() =>
  import('./apps/useEffect-and-lifecycle/UseEffect')
);
const ArtGallery = lazy(() => import('./apps/art-gallery/ArtGallery'));
const MyBooks = lazy(() => import('./apps/mybooks/components/MyBooks'));
const ApiCustomHook = lazy(() =>
  import('./apps/api-custom-hook/ApiCustomHook')
);
const ClassComponents = lazy(() =>
  import('./apps/class-components/ClassComponents')
);

const Home = () => {
  return (
    <Switch>
      {/* Wait for components to load before rendering. Currently this is the only use case for Suspense */}
      <Suspense fallback={<div>Loading App...</div>}>
        <Route path="/" exact>
          <section>
            <h1>React Apps</h1>
            <p>Apps created during the class</p>
            <nav className="navbar">
              <ul className="nav-links">
                <li className="nav-item">
                  <NavLink to="/animal-shelter">AnimalShelter</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/mad-props">MadProps</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/bookshelf">BookShelf</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/useeffect-and-lifecycle">useEffect</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/art-gallery">ArtGallery</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/mybooks">MyBooks</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/hooks-verse">Hooks Verse</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/api-custom-hook">API Custom Hook</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/class-components">Class Components</NavLink>
                </li>
              </ul>
            </nav>
          </section>
        </Route>
        <Route path="/animal-shelter">
          <AnimalShelter />
        </Route>
        <Route path="/mad-props">
          <MadProps />
        </Route>
        <Route path="/bookshelf">
          <BookShelf />
        </Route>
        <Route path="/useeffect-and-lifecycle">
          <UseEffect />
        </Route>
        <Route path="/art-gallery">
          <ArtGallery />
        </Route>
        <Route path="/mybooks">
          <MyBooks />
        </Route>
        <Route path="/hooks-verse">
          <HooksVerse />
        </Route>
        <Route path="/api-custom-hook">
          <ApiCustomHook />
        </Route>
        <Route path="/class-components">
          <ClassComponents />
        </Route>
      </Suspense>
    </Switch>
  );
};

function kebabToPascal(text) {
  return text.replace(/(^\w|-\w)/g, (text) =>
    text.replace(/-/, '').toUpperCase()
  );
}

function App() {
  const { pathname } = useLocation();
  // convert kebab-case to PascalCase after removing leading '/'
  const appName = kebabToPascal(pathname.slice(1));

  return (
    <div className="App">
      <header className="AppHeader">
        <div className="logo">
          <Link to="/">
            <span>React Apps</span>
          </Link>
        </div>
        <div className="current-app">{appName}</div>
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <p>Created at Juno</p>
      </footer>
    </div>
  );
}

export default App;
