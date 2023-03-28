import styles from '../styles/Home.module.css'
import Link from 'next/link';

const privacypolicy = () => {
  return (
    <>
    <div className={styles.code} style={{'width':'120px'}}><Link href="/">Go Back</Link></div>
    
    <section className={styles.ptsec}>
      <div className={styles.code} style={{'lineHeight' : '1.5rem','wordSpacing' : '0.5rem'}}>
      At RaniServers, we value and respect the privacy of our users. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website.

Personal Information We Collect
When you register on our website or purchase our premium membership, we may collect certain personal information from you, including your name, email address, and SteamID. We use this information solely to provide you with our services and communicate with you regarding your membership.

Use of Cookies
We use cookies to enhance your experience on our website. Cookies are small files that are stored on your device when you visit our website. They help us remember your preferences, analyze your usage of our website, and improve our services.

Security Measures
We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption technologies to ensure the security of your data.

Sharing of Personal Information
We do not sell, trade, or rent your personal information to third parties. We may, however, share your information with third-party service providers who assist us in providing our services.

Changes to this Privacy Policy
We reserve the right to modify this Privacy Policy at any time. We will notify you of any changes by posting the revised policy on our website.

Contact Us
If you have any questions or concerns regarding our Privacy Policy, please contact us at<a href = "mailto: controller.raniservers@gmail.com" className={styles.linktag} target="_blank"> controller.raniservers@gmail.com</a>.
</div>
    </section>
    </>
  )
}

export default privacypolicy