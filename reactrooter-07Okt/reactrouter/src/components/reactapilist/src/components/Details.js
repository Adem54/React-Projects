import React from "react";

function Details({ user }) {//user bir objedir
  return (
    <div>
      <div className="details" key={user.email} style={{ marginBottom: "20px" }}>
        <div>
          {" "}
          <img src={user.photo} alt={user.name}/>{" "}
        </div>
        <br></br>
        Name:{user.name} <br></br>
        Surname:{user.surname}
        <br></br>
        Gender:{user.gender}
        <br></br>
        Region:{user.region} <br></br>
        Age:{user.age}
        <br></br>
        Email:{user.email}
      </div>
    </div>
  );
}

export default Details;
