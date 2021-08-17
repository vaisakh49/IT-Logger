import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
import TechItem from './TechItem';
import PropTypes from 'prop-types';

export const TechListModel = ({ techs, loading, getTechs }) => {
  // const [techs, setTechs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, [getTechs]);

  // const getTechs = async () => {
  //   setLoading(true);
  //   const res = await fetch('/techs');
  //   const data = await res.json();

  //   setTechs(data);
  //   setLoading(false);
  // };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};
TechListModel.propTypes = {
  techs: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  techs: state.tech.techs,
  loading: state.tech.loading,
});

export default connect(mapStateToProps, { getTechs })(TechListModel);
