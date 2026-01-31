import { NetflixRegister } from '../Netflix-Register/Netflix-Register';
import './Netflix-main.css';
export function NetflixMain() {
  return (
    <main>
      <div className='main-title'>
        Unlimited movies, shows, and more
      </div>

      <div className='sub-title'>
        Starts at ₹149. Cancel at any time.
      </div>
      <NetflixRegister></NetflixRegister>
    </main>
  )
}