import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

export const AddTechModel = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    // Auto init matirialize js
    M.AutoInit();
  });

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter first and last name' });
    } else {
      console.log(firstName, lastName);
      //Clear Feilds
      setFirstName('');
      setLastName('');
    }
  };
  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lasttName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!1'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModel;
