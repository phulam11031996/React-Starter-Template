import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';

const Browse = () => {
  return (
    <div>
      <h2>Who's watching?</h2>
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
      <button>Manage Profiles</button>
    </div>
  );
}

export default Browse;
