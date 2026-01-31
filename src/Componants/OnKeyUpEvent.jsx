import { useState } from "react"

export function OnKeyUpEvent() {

  const [User] = useState(
    [
      { UserName: 'Datta' },
      { UserName: 'Vipin' },
      { UserName: 'Mohit' },
    ]

  )
  const [UserError, SetUserError] = useState('');
  const [updateUser, setUpdateUser] = useState(false);

  function handalOnKeyEvent(e) {
    const userName = e.target.value;

    for (const Users of User) {
      if (Users.UserName === userName) {
        SetUserError('This name already exists');
        setUpdateUser(false);
        return; // stop loop once found
      }
    }

    // if no match found
    SetUserError('Valid User');
    setUpdateUser(true);
  }
  return (
    <div>
      <label htmlFor="">Enter New Roomate Name</label> &nbsp;
      <input type="text" onKeyUp={handalOnKeyEvent} />
      <p style={{ color: updateUser ? "green" : "Red" }} >{UserError}</p>
    </div>
  )
}