import { useFormik } from "formik";

export function FormDemo() {

  const styles = {
    container: {
      width: "350px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontFamily: "Arial"

    },
    heading: {
      textAlign: "center",
      marginBottom: "16px"
    },
    dt: {
      fontWeight: "bold",
      marginTop: "10px"
    },
    dd: {
      marginBottom: "10px"
    },
    input: {
      width: "100%",
      padding: "6px",
      border: "1px solid #aaa",
      borderRadius: "4px"
    },
    button: {
      width: "100%",
      padding: "8px",
      backgroundColor: "#1976d2",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "10px"
    }
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      mobile: "",
      city: "",
      gender: ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Register User</h3>

      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt style={styles.dt}>User Name</dt>
          <dd style={styles.dd}>
            <input
              type="text"
              name="userName"
              style={styles.input}
              value={formik.values.userName}
              onChange={formik.handleChange}
            />
          </dd>

          <dt style={styles.dt}>Password</dt>
          <dd style={styles.dd}>
            <input
              type="password"
              name="password"
              style={styles.input}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </dd>

          <dt style={styles.dt}>Mobile Number</dt>
          <dd style={styles.dd}>
            <input
              type="number"
              name="mobile"
              style={styles.input}
              value={formik.values.mobile}
              onChange={formik.handleChange}
            />
          </dd>

          <dt style={styles.dt}>City</dt>
          <dd style={styles.dd}>
            <select
              name="city"
              style={styles.input}
              value={formik.values.city}
              onChange={formik.handleChange}
            >
              <option value="">Select City</option>
              <option value="Hyd">Hyd</option>
              <option value="Solapur">Solapur</option>
              <option value="Pune">Pune</option>
            </select>
          </dd>

          <dt style={styles.dt}>Gender</dt>
          <dd style={styles.dd}>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formik.values.gender === "Male"}
                onChange={formik.handleChange}
              /> Male
            </label>
          </dd>

          <dd style={styles.dd}>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formik.values.gender === "Female"}
                onChange={formik.handleChange}
              /> Female
            </label>
          </dd>
        </dl>

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
}
