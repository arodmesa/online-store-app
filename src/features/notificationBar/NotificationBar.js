import './NotificationBar.css';
import { useSelector } from "react-redux";

//{(notificationText) && <div className="divRow divNotificationBar"><p className="notificationText">{notificationText}</p></div>}
function NotificationBar(){
    const notificationText = useSelector((state)=>state.notificationTextReducer.notificationText);
    return(
        <>
            {(notificationText) && <div className="divRow divNotificationBar"><p className="notificationText">{notificationText}</p></div>}
        </>           
    )
}
//<div className="divRow divNotificationBar"><p className="notificationText">Hola Doris. Lets try a longer text</p></div>

export default NotificationBar;