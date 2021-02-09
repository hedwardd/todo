import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../actions/theme';


const ThemePicker = (props) => {

  const { theme } = useSelector(state => state.theme);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {

    dispatch(setTheme(target.value));
  };

  return (
    <select value={theme} onChange={handleChange}>
  		<option value="light">light</option>
  		<option value="dark">dark</option>
  		<option value="classy">classy</option>
  		<option value="nature">nature</option>
			<option value="floral">floral</option>
		</select>
  )
}

export default ThemePicker;
