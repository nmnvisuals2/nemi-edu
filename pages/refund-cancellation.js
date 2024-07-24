import styles from '../styles/Home.module.css'
import DefaultLayout from '../layout/DefaultLayout';
import st from './DefaultStyle.module.css';
function ShippingPolicy(props) {

    return (<DefaultLayout>

        <div className={st.mainbox}>
<h2 className={st.h2}>Refund & Cancellation Policy</h2>
<div className={st.enc}>
<>
  <p>
    <strong>Refund and Cancellation Policy</strong>
  </p>
  <p>
    At Nemiedu, we strive to provide the best educational experience. However,
    if you wish to cancel your enrollment, please review our policy below:
  </p>
  <p>
    <strong>Refund Eligibility:</strong>
  </p>
  <ol>
    <li>
      <strong>Refund Period</strong>: You are eligible to request a refund
      within 3 days of enrollment.
    </li>
    <li>
      <strong>Refund Process</strong>: To initiate a refund, please contact us
      at <a href='mailto:info@nemiedu.com'>info@nemiedu.com</a> with your enrollment details.
    </li>
  </ol>
  <p>
    <strong>Cancellation:</strong>
  </p>
  <ul>
    <li>
      To cancel your enrollment, please email us at <a href='mailto:info@nemiedu.com'>info@nemiedu.com</a> with your
      request.
    </li>
  </ul>
  <p>
    Please note that refunds are only available within the specified time frame
    and may take up to 7-10 business days to process.
  </p>
  <p>
    <strong>Contact Information:</strong>
  </p>
  <ul>
    <li>Email: <a href='mailto:info@nemiedu.com'>info@nemiedu.com</a></li>
  </ul>
  <p>
    Thank you for choosing Nemiedu. We appreciate your understanding and
    cooperation.
  </p>
</>

</div>

        </div>
    </DefaultLayout>)
}
export default ShippingPolicy;