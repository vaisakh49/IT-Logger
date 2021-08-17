import React from 'react';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techAction';

import PropTypes from 'prop-types';

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
  };
  return (
    <li className='collection-item'>
      <div>
        {' '}
        {firstName} {lastName}
        <a href='#!2' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
