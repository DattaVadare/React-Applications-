export function EventCom() {
  function clickedButton() {
    alert("Button clicked")
  }
  return (
    <div>
      <button onClick={clickedButton}>Click Button</button>
    </div>
  )
}