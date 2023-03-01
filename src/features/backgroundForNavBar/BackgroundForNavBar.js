import './BackgroundForNavBar.css';
import { useSelector } from 'react-redux';

function BackgroundForNavBar(){
    const isHorizontalBarsIconVisible = useSelector((state)=>state.horizontalBarsIconVisibilityReducer.isHorizontalBarsIconVisible);
    const classToShowBackground = (isHorizontalBarsIconVisible)?'':' hideBackground';
    return(
        <>
            <div title='simpleBackground' className={"simpleBackground" + classToShowBackground}></div>
            <div className='paddingFromTop'></div>
        </>
    )
}
export default BackgroundForNavBar