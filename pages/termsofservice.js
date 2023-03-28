import styles from '../styles/Home.module.css'
import Link from 'next/link';

const privacypolicy = () => {
  return (
    <>
    <div className={styles.code} style={{'width':'120px'}}><Link href="/">Go Back</Link></div>
    
    <section className={styles.ptsec} style={{'marginTop':'4rem'}}>
      <div className={styles.code} style={{'lineHeight' : '1.5rem','wordSpacing' : '0.4rem'}}>
        <ol>
          <li>Users may not use Rani Servers to engage in any illegal activities or activities that violate the terms of use for Steam or Counter-Strike: Global Offensive.</li>
          <li>Rani Servers reserves the right to terminate or suspend any user's account at any time for any reason, including but not limited to violation of these terms of service or for using cheats in any of the servers.</li>
          <li>Users acknowledge and agree that Rani Servers is not responsible for any interruptions or downtime to the service, including but not limited to server crashes or maintenance periods.</li>
          <li>Rani Servers reserves the right to modify these terms of service at any time without prior notice. It is the user's responsibility to regularly check for updates to these terms of service.</li>
          <li>Rani Servers is not responsible for any damages, losses, or expenses incurred as a result of using the service, including but not limited to lost profits, data loss, or any other consequential damages.</li>
        </ol>
      
Contact Us
If you have any questions or concerns regarding our terms of service, please contact us at<a href = "mailto: controller.raniservers@gmail.com" className={styles.linktag} target="_blank">controller.raniservers@gmail.com</a>.
</div>
    </section>
    </>
  )
}

export default privacypolicy
