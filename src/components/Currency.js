import { useState } from 'react';
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Menu, MenuItem, MenuButton, MenuList } from '@reach/menu-button';
import '@reach/menu-button/styles.css';
const Currency = () => {
    const [currency, setCurrency] = useState('£ Pound')
    const { dispatch } = useContext(AppContext);
    const handleCurrencyChange = (c) => {
        setCurrency(c);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: c[0],
        }); 
    }
    return (
        <div>
       <Menu>
        <MenuButton style={{ background: 'green',fontSize: '1.5em'}}>
          Currency <span aria-hidden>{currency}▾</span>
        </MenuButton>
        <MenuList>
        <MenuItem onSelect={() => handleCurrencyChange('$ Dollar')} style={{ background: 'green',fontSize: '1.5em'}}>$ Dollar</MenuItem>
        <MenuItem onSelect={() => handleCurrencyChange('£ Pound')} style={{ background: 'green',fontSize: '1.5em'}}>£ Pound</MenuItem>
        <MenuItem onSelect={() => handleCurrencyChange('€ Euro')} style={{ background: 'green',fontSize: '1.5em'}}>€ Euro</MenuItem>
        <MenuItem onSelect={() => handleCurrencyChange('₹ Ruppee')} style={{ background: 'green',fontSize: '1.5em'}}>₹ Ruppee</MenuItem>
       </MenuList>
      </Menu>
    </div>
     );
};
export default Currency;