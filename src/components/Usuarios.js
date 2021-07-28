import React, { useState, useEffect } from "react";

/* Importamos connect para conectar  */
import * as usuariosActions from "../actions/usuariosActions"
import { connect } from "react-redux";

const API = "https://jsonplaceholder.typicode.com/users";
const Usuarios = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  
  console.log(props);
  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>{user.name}</p>
          <b>
            {" "}
            <span>{`@${user.username}`}</span>
          </b>
        </div>
      ))}
    </>
  );
};


/* MapStateToprops nos ayuda para traer nuestro reducers */
const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};


export default connect(mapStateToProps, usuariosActions )(Usuarios);
