import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../actions/theme';
import { StyledSelect } from '../styles/TaskList';


const ThemePicker = (props) => {

  const { theme } = useSelector(state => state.theme);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {

    dispatch(setTheme(target.value));
  };

  return (
    <StyledSelect value={theme} onChange={handleChange}>
  		<option value="light">light</option>
  		<option value="dark">dark</option>
  		<option value="classy">classy</option>
  		<option value="nature">nature</option>
			<option value="floral">floral</option>
		</StyledSelect>
  )
}

export default ThemePicker;
