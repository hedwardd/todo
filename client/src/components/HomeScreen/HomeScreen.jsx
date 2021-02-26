import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAliasAvailability } from '../../actions/list';
import InitialCard from './InitialCard';
import NewListCard from './NewListCard';
import ExistingListCard from './ExistingListCard';
import { Card, SectionWrapper, H2Wrapper, StyledH2, PrimaryButton, PrimaryButtonText, SecondaryButton, SecondaryButtonText } from '../../styles/HomeScreen/HomeScreen';

const HomeScreen = (props) => {

  const [isUserCreating, setIsUserCreating] = useState(null);

  return isUserCreating == null ? (
    <InitialCard
      setIsUserCreating={setIsUserCreating}
    />
  ) : isUserCreating ? (
    <NewListCard
      setIsUserCreating={setIsUserCreating}
      isUserCreating={isUserCreating}
    />
  ) : (
    <ExistingListCard
      setIsUserCreating={setIsUserCreating}
    />
  );
}

export default HomeScreen;
