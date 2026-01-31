import './Netflix-header.css'
export function NetflixHeader() {
  return (
    <header className="p-4 text-white d-flex justify-content-between">
      <div>
        <span className='breand-title'>NETFLIX</span>
      </div>
      <div className='d-flex'>
        <div className='input-group'>
          <span className='bi bi-translate input-group-text '></span>
          <select className='form-select'>
            <option>English</option>
            <option>Marathi</option>
          </select>
        </div>
        <button className='btn btn-danger sm ms-3'>Signin</button>
      </div>

    </header>
  )
}