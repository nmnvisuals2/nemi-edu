import DefaultLayout from "../layout/DefaultLayout";
import styles from './Placements.module.css'
function ThankYou(props){


    return <DefaultLayout>
<div className={styles.maincont}>
<div className={styles.colsing}>
    
    <h1>Thank You for Submission</h1>
    <p>Our Executive will get in touch with you shortly. <br/>Meanwhile you can have a look at our website and courses</p>
    <div className={styles.in}>
<a href="/">Visit Our Website</a>


    </div>
    
    </div>

</div>

    </DefaultLayout>
}


export default ThankYou;