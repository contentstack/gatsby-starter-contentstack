/* eslint-disable */
import React, { useState } from 'react';

export const LocaleContext = React.createContext();

const Provider = props => {
  const [currentLocale, setLocale] = useState('en-us');

  return (
    <LocaleContext.Provider value={{
      currentLocale,
      changeLocale: (locale) => setLocale(locale)
    }}>
      {props.children}
    </LocaleContext.Provider>
  );
};

export default ({element}) => (
    <Provider>
        {element}
    </Provider>
);