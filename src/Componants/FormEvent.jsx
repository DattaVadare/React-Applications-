export function FormEvent() {

  function handeelFrormSubmit(e) {

    e.preventDefault();
    const clickedButton = e.nativeEvent.submitter.name;

    if (clickedButton === "Delete") {
      alert("Record deleted successfully!!");
    } else if (clickedButton === "Insert") {
      alert("Record inserted successfully!!");
    } else if (clickedButton === "Update") {
      alert("Record updated successfully!!");
    }

  }
  return (
    <form onSubmit={handeelFrormSubmit}>
      <label htmlFor="">User Name</label>
      <input type="text" placeholder="Enter User Name" />
      <button name="Insert">Insert</button>
      <button name="Update">Update</button>
      <button name="Delete">Delete</button>
    </form>
  )
}