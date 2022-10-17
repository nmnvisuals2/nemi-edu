import styles from '../styles/Home.module.css'
import DefaultLayout from '../layout/DefaultLayout';
import st from './DefaultStyle.module.css';
function ShippingPolicy(props) {

    return (<DefaultLayout>

        <div className={st.mainbox}>
<h2 className={st.h2}>SHIPPING POLICY</h2>
<div className={st.enc}>
<h2>SHIPPING & DELIVERY POLICY</h2>
<br/>
<br/>
Last updated August 31, 2022
<br/><br/><br/>


This Shipping & Delivery Policy is part of our Terms and Conditions ("Terms") and should be therefore read alongside our main Terms: https://nemiedu.com/terms_and_conditions.
<br/><br/>
Please carefully review our Shipping & Delivery Policy when purchasing our products. This policy will apply to any order you place with us.
<br/><br/>
<h1>WHAT ARE MY SHIPPING & DELIVERY OPTIONS?</h1>
<br/><br/>
Free Shipping
<br/><br/>
We offer free Instant Digital shipping on all orders.
<br/><br/>
DO YOU DELIVER INTERNATIONALLY?
<br/><br/>
We do not offer international shipping.
<br/><br/>
HOW CAN YOU CONTACT US ABOUT THIS POLICY?
<br/><br/>
If you have any further questions or comments, you may contact us by:
Email: info@nemiedu.com
</div>

        </div>
    </DefaultLayout>)
}
export default ShippingPolicy;