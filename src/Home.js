import React from "react";

function Home({ sharedTableData = [] }) { // default empty array
  return (
    <div style={{ padding: "30px" }}>
      <h2>Home Page</h2>

      {sharedTableData.length === 0 ? (
        <p>No data submitted yet</p>
      ) : (
        <table border="1" width="100%" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {sharedTableData.map((s, i) => (
              <tr key={i}>
                <td>{s.firstName} {s.lastName}</td>
                <td>{s.phone}</td>
                <td>{s.email}</td>
                <td>{s.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Home;
