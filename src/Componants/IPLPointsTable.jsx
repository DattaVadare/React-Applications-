

export function IPLPointTable() {

  const iplPointTable = [
    { Team: "PBKS", M: 13, W: 9, L: 4, Points: 18, Logo: "p.jpg" },
    { Team: "RCB", M: 13, W: 8, L: 5, Points: 16, Logo: "r.jpg" },
    { Team: "CSK", M: 13, W: 7, L: 6, Points: 14, Logo: "c.jpg" },
    { Team: "GT", M: 13, W: 6, L: 7, Points: 12, Logo: "g.jpg" },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 fw-bold text-primary">IPL Points Table</h2>

      <table className="table table-hover table-bordered text-center align-middle shadow">
        <thead className="table-dark">
          <tr>
            <th>Logo</th>
            <th>Team</th>
            <th>M</th>
            <th>W</th>
            <th>L</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {iplPointTable.map(team => (
            <tr key={team.Team}>
              <td>
                <img
                  src={team.Logo}
                  alt={team.Team}
                  width="40"
                  height="40"
                  className="rounded-circle border"
                />
              </td>
              <td className="fw-bold">{team.Team}</td>
              <td>{team.M}</td>
              <td className="text-success fw-bold">{team.W}</td>
              <td className="text-danger fw-bold">{team.L}</td>
              <td className="fw-bold text-primary">{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
