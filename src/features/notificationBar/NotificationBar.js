import './NotificationBar.css';
import { useSelector } from "react-redux";

function NotificationBar(){
    const notificationText = useSelector((state)=>state.notificationTextReducer.notificationText);
    return(
        <>
            {(notificationText) && <div title='divNotificationBar' className="divRow divNotificationBar"><p className="notificationText">{notificationText}</p></div>}
        </>           
    )
}

export default NotificationBar;