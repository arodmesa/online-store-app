import './App.css';
import {Routes, Route} from 'react-router-dom';
import { lazy, Suspense, useState} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import NavBar from './features/navBar/NavBar';
import Animation from './componentes/Animation';
import PageNotFound from './websitePages/PageNotFound';
import PortraitsPage from './websitePages/PortraitsPage';
import PortraitDetailsPage from './websitePages/PortraitDetailsPage';
import ErrorPage from './websitePages/ErrorPage';
import NotificationBar from './features/notificationBar/NotificationBar';
import { useSelector } from 'react-redux';
const LazyHome= lazy(()=>import ('./websitePages/HomePage'));
const LazyAbout= lazy(()=>import ('./websitePages/AboutPage'));
const LazyCart= lazy(()=>import ('./websitePages/CartPage'));

// Arreglar el componente Error para q tenga una foto offline 
// corregir q cuando no encuentre coincidencias ponga alguna foto the oops o similar
// Arreglar q cuando pongan manualmente una pag en la url que sea mas grande q el numero de pag ponga oops o similar

function App() {
  const [isHorizontalBarsVisible, setHorizontalBarsVisibility] = useState(true);
  const areAllPortraitsLoaded = useSelector((state)=>state.areAllPortraitsLoadedReducer.areLoaded);
  const percentageOfLoadedPortraits = useSelector((state)=>state.percentageOfLoadedPortraitsReducer.percentage);
  
  function focusOutsideNavBar(){
    if (!isHorizontalBarsVisible){
      setHorizontalBarsVisibility(true);
    }
  }
  function desactivateHorizontalBarsVisibility(){
    setHorizontalBarsVisibility(false);
  }

  return (
    <div className="App" onClick={focusOutsideNavBar}>
      <NotificationBar />
      <NavBar isHorizontalBarsVisible={isHorizontalBarsVisible} desactivateHorizontalBarsVisibility={desactivateHorizontalBarsVisibility} />
      <Routes>
        <Route path='/' element={
          <Suspense fallback={<Animation />}>
            <LazyHome />
          </Suspense>
          }
        />
        <Route path='about' element={
            <Suspense fallback={<Animation />}>
                <LazyAbout/>
            </Suspense>            
          }         
        />
        <Route path='products' >
          <Route path='pageNum/:page' element={
            <>
              <div style={(areAllPortraitsLoaded)?{display:'block'}:{display:'none'}}>
                <PortraitsPage /> 
              </div>
              <div style={(areAllPortraitsLoaded)?{display:'none'}:{display:'block'}}>  
                <div style={{ width: '25vw', height: '25vw' }}>
                  <CircularProgressbar value={percentageOfLoadedPortraits} text={`${percentageOfLoadedPortraits}%`} />
                </div>
              </div> 
            </>           
          }           
        />
        </Route>
        <Route path='product'>
          <Route path='ID/:id' element={<PortraitDetailsPage />}></Route>
        </Route>
        <Route path='cart' element={
          <Suspense fallback={<Animation />}>
            <LazyCart />
          </Suspense>          
          }         
        />
        <Route path='error' element={<ErrorPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <footer className='pixabayDiv'>
        <h4 className='footerPixabay'>All images were obtained from <a className='pixabayLink' href='https://pixabay.com/' target='_blank' rel="noreferrer">Pixabay API</a>. Thanks to the developers.</h4>
      </footer>
    </div>
  );
}

export default App;