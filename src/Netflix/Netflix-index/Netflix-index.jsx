import { NetflixMain } from '../Netflix-Main/Netflix-main';
import { NetflixHeader } from '../Netflix-header/Netflix-header';
import './Netflix-index.css';
export function NetFlixIndex() {
  return (
    <div className="bg-image">
      <div className="bg-shade">
        <NetflixHeader></NetflixHeader>
        <NetflixMain></NetflixMain>

      </div>
    </div>
  )
}