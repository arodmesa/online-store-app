import './App.css';
import {Routes, Route} from 'react-router-dom';
import { lazy, Suspense} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import NavBar from './features/navBar/NavBar';
import Animation from './componentes/Animation';
import PageNotFound from './websitePages/PageNotFound';
import PortraitsPage from './websitePages/PortraitsPage';
import PortraitDetailsPage from './websitePages/PortraitDetailsPage';
import ErrorPage from './websitePages/ErrorPage';
import NotificationBar from './features/notificationBar/NotificationBar';
import BackgroundForNavBar from './features/backgroundForNavBar/BackgroundForNavBar';
import { useSelector, useDispatch } from 'react-redux';
import { changeHorizontalBarsIconVisibility } from './features/navBar/horizontalBarsIconVisibilitySlice';
const LazyHome= lazy(()=>import ('./websitePages/HomePage'));
const LazyAbout= lazy(()=>import ('./websitePages/AboutPage'));
const LazyCart= lazy(()=>import ('./websitePages/CartPage'));

// hacer que en la vista movil y tablet cuando se deslice con el dedo se muevan las pag 1-5 -> 6-10 etc
function App() {
  const dispatch = useDispatch();
  const isHorizontalBarsIconVisible = useSelector((state)=>state.horizontalBarsIconVisibilityReducer.isHorizontalBarsIconVisible);
  const areAllPortraitsLoaded = useSelector((state)=>state.areAllPortraitsLoadedReducer.areLoaded);
  const percentageOfLoadedPortraits = useSelector((state)=>state.percentageOfLoadedPortraitsReducer.percentage);
  
  function focusOutsideNavBar(){
    if (!isHorizontalBarsIconVisible){
      dispatch(changeHorizontalBarsIconVisibility(true))
    }
  }

  return (
    <div className="App" onClick={focusOutsideNavBar}>
      <NotificationBar />
      <NavBar />
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
              <div className='organizeCircularProgressBar' style={(areAllPortraitsLoaded)?{display:'none'}:{display:'flex'}}>  
                <BackgroundForNavBar />
                <div className='circularProgressBarDiv'>
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
