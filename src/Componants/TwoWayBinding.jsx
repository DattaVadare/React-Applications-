import { useState } from "react"

export function TwoWayInputExample() {
  const [UserName, setUserName] = useState("Datta");

  function handalNameChange(e) {
    setUserName(e.target.value);
  }
  return (
    <>
      <dt>User Name:</dt>
      <dd><input type="text" value={UserName} onChange={handalNameChange} ></input></dd>
    </>
  )
}