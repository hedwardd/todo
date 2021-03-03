import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAliasAvailability } from '../../actions/list';
import InitialCard from './InitialCard';
import LookupCard from './LookupCard';

const HomeScreen = (props) => {

  const [isUserCreating, setIsUserCreating] = useState(null);

  return isUserCreating == null ? (
    <InitialCard
      setIsUserCreating={setIsUserCreating}
    />
  ) : (
    <LookupCard
      setIsUserCreating={setIsUserCreating}
      isUserCreating={isUserCreating}
    />
  );
}

export default HomeScreen;
