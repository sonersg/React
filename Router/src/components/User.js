import { useParams, Link, useOutletContext } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

function User() {
    let { id } = useParams();
    const obj = useOutletContext();
  return (
    <div>
      <h2>
        User {id} {obj.hello}
      </h2>
    </div>
  )
}

export default User