import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import { loadStripe } from '@stripe/stripe-js';
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_LIVE_STRIPE_PB_KEY);

export default function Home() {
  const router = useRouter();
  const { success, canceled } = router.query;
  const [steamID, setSteamID] = useState('');

  
  useEffect(() => {

    if (success !== undefined || canceled !== undefined) {
      if (success) {
        console.log('Order placed! You will receive an email confirmation.');
        toast('Transaction successful !', { hideProgressBar: true, autoClose: 3000, type: 'success' })
        setTimeout(() => {
          router.replace(router.pathname);
        }, 3000);
      }

      if (canceled) {
        console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        toast('Order failed!', { hideProgressBar: true, autoClose: 3000, type: 'error' })
        setTimeout(() => {
          router.replace(router.pathname);
        }, 3000);
        
      }
    }

  }, [success, canceled]);


  return (
    <div className={styles.container}>
      <Head>
        <title>Rani Servers</title>
        <link rel="icon" href="/ranilogo1.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/ranilogo1.png"
          alt="ranilogo"
          width={275}
          height={275}
          priority
        />
        <h1 className={styles.title} style={{ 'color': '#0c0f12', 'marginTop': '1rem' }}>
          Welcome to Rani Servers
        </h1>

        <section style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'marginTop': '3rem' }}>
          <div className={styles.code}>
          128 tick servers !ws !knife !gloves !agents
          </div>
        </section>
        <section style={{ 'marginTop': '3rem','display' : 'flex', 'flexDirection' : 'column'}}>
          <div className ={styles.flexchange}>
          <div className={styles.serverlabel} style = {{'marginBottom' : '1rem'}}>
           pug server : 
          </div>
          <div className={styles.serverconnect} style = {{'marginBottom' : '1rem'}}>
            connect 13.126.127.126:27015
          </div>
          </div>
          <div className ={styles.flexchange}>
          <div className={styles.serverlabel}>
          deathmatch server :  
          </div>
          <div className={styles.serverconnect} >
          connect 3.109.24.192:27015
          </div>
          </div>
          
        </section>
        <section className={styles.midsection} >
          <section style={{ 'display': 'block', 'width': '300px', 'marginTop': '2rem' }}>
            <div className={styles.code} style={{ 'height': '150px' }}>
              Buy premium membership for ₹100 per month to gain access to :
              <ul>
                <li>vip tags</li>
                <li>reserved slot</li>
              </ul>
            </div>
          </section>
          <section style={{ 'display': 'block', 'width': '250px', 'marginTop': '2rem', 'marginLeft': '3rem' }}>
            <div className={styles.code}>
              <form style={{ 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'center' }} action="/api/payment" method="POST">
                <label style={{ 'margin': '0.5rem' }}>Steam ID</label>
                <input type="text"
                  id="steamid"
                  name="steamID"
                  value={steamID}
                  onChange={(e) => { setSteamID(e.target.value) }}
                  style={{ 'margin': '0.5rem', 'padding': '0.5rem', 'border': '0', 'borderRadius': '0.317rem' }} placeholder='STEAM_X:Y:Z' required />

                <button type="submit" role='link' className={styles.button}>Pay now</button>

              </form>
            </div>
          </section>
        </section>

        <div className={styles.code} style = {{'fontSize' : '0.7rem','position' : 'fixed','left' : '0px', 'bottom' : '0px'}}>
          contact me through <a href = "mailto: controller.raniservers@gmail.com" className={styles.linktag} target="_blank"> Email </a> for hosting csgo tournaments and private scrims
          </div>
        
        <ToastContainer />
      </main>

    </div>
  )
}
