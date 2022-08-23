import styles from './Notifications.module.css'

function Notifications({text,type}){
return(<div className={styles.notification + " " + (type)}><div className={styles.notification_inner}><p>{text}</p></div></div>);

}
export default Notifications;