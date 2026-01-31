export function NonPriDataBinding() {

  // Meaningful arrays for each section
  const Courses = ["Java", "Python", "React JS", "Node JS", "AWS"];
  const Cities = ["Bangalore", "Hyderabad", "Pune", "Delhi", "Mumbai"];
  const Employees = ["John", "Sophia", "Amit", "Priya", "David"];
  const Skills = ["Communication", "Leadership", "Team Work", "Problem Solving", "Creativity"];

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4 fw-bold">Dashboard Application</h2>

      <div className="row g-4">

        {/* Card 1: List (Courses) */}
        <div className="col-md-6 col-lg-6">
          <div className="card shadow h-100 rounded-4">
            <div className="card-header bg-primary text-white rounded-top-4">
              <h5 className="mb-0">Popular Courses</h5>
            </div>
            <div className="card-body">
              <ol className="list-group list-group-numbered">
                {Courses.map((course, index) => (
                  <li key={index} className="list-group-item">
                    {course}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Card 2: Dropdown (Cities) */}
        <div className="col-md-6 col-lg-6">
          <div className="card shadow h-100 rounded-4">
            <div className="card-header bg-success text-white rounded-top-4">
              <h5 className="mb-0">Select City</h5>
            </div>
            <div className="card-body">
              <select className="form-select w-75">
                {Cities.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Card 3: Table (Employees) */}
        <div className="col-md-6 col-lg-6">
          <div className="card shadow h-100 rounded-4">
            <div className="card-header bg-dark text-white rounded-top-4">
              <h5 className="mb-0">Employee List</h5>
            </div>
            <div className="card-body">
              <table className="table table-bordered table-striped mb-0">
                <thead className="table-secondary">
                  <tr>
                    <th>Employee Name</th>
                  </tr>
                </thead>
                <tbody>
                  {Employees.map((emp, index) => (
                    <tr key={index}>
                      <td>{emp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Card 4: Checkbox List (Skills) */}
        <div className="col-md-6 col-lg-6">
          <div className="card shadow h-100 rounded-4">
            <div className="card-header bg-info text-white rounded-top-4">
              <h5 className="mb-0">Select Skills</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {Skills.map((skill, index) => (
                  <li key={index} className="list-group-item d-flex align-items-center">
                    <input type="checkbox" className="form-check-input me-2" />
                    <label className="form-check-label">{skill}</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
