import React from 'react';
import PropTypes from 'prop-types';
import { getDegrees } from '../helpers/geo';
import { Icon } from 'react-mdl';

const Direction = ({ geo, longitude, latitude, dist }) => {
  if (!geo || !geo.latitude) return <div/>;

  if (dist < 0.02) return <Icon name="star" />;

  const deg = getDegrees(geo.latitude,
                        geo.longitude,
                        latitude,
                        longitude);

  const orient = Math.floor(360 - (720 - (geo.orientation || 0) - deg) % 360);

  return <Icon name="navigation" style={{ transform: `rotate(${orient}deg)` }} />;
};

Direction.propTypes = {
  geo: PropTypes.object,
  longitude: PropTypes.number,
  latitude: PropTypes.number,
  dist: PropTypes.number
};

export default Direction;
