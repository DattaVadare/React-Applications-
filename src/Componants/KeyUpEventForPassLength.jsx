import { useState } from "react";

export function PassLength() {

  const [passError, setPassError] = useState("");
  const [isPassValid, setIsPassValid] = useState(false);

  function checkPassLength(e) {
    const value = e.target.value;

    if (value.length <= 6) {
      setPassError("Weak password");
      setIsPassValid(false);
    } else {
      setPassError("Strong password");
      setIsPassValid(true);
    }
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><label>Enter Password</label></td>
            <td>
              <input type="password" onKeyUp={checkPassLength} />
            </td>
            <br />
            <td>
              <p style={{ color: isPassValid ? "green" : "red" }}>
                {passError}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
