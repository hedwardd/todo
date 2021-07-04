import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";

import { setTheme } from '../../actions/theme';
import { StyledSelect } from '../../styles/TaskList/TaskList';


const ThemePicker = ({ handleUpdateTheme }) => {

  const { theme } = useSelector(state => state.theme);

  const dispatch = useDispatch();
  const { listAlias } = useParams();

  const handleChange = ({ target }) => {

    dispatch(setTheme(listAlias, target.value));
  };

  return (
    <StyledSelect value={theme} onChange={handleChange} title="Set list theme">
  		{/* <option value="light">light</option> */}
  		<option value="dark">dark</option>
  		<option value="classy">classy</option>
  		<option value="nature">nature</option>
			<option value="floral">floral</option>
		</StyledSelect>
  )
}

export default ThemePicker;
