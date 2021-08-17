import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions';
import TechSelectOption from '../techs/TechSelectOptions';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';

export const AddLogModel = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    // Auto init matirialize js
    M.AutoInit();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };
      addLog(newLog);
      // console.log(message);

      //Clear Feilds
      setMessage('');
      setAttention(false);
      setTech('');
      M.toast({ html: `Log added by ${tech}` });
    }
  };
  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              {/* <option value='john doe'>John Doe</option>
              <option value='kamilia'>kamilia</option>
              <option value='amelia'>amelia</option> */}
              <TechSelectOption />
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};
AddLogModel.propTypes = {
  addLog: PropTypes.func.isRequired,
};

export default connect(null, { addLog })(AddLogModel);
