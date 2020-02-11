import React, { useState, useEffect } from 'react';
import { useDebounce, useLocation } from 'react-use';
import queryString from 'query-string';
import { pickBy } from 'lodash';
import Search from './Search';

const LocationAwareSearch = ({ history, placeholder }) => {
  const location = useLocation();
  const { search, pathname } = location;
  const query = queryString.parse(search);
  const [value, setValue] = useState(query.search || '');
  const [debouncedValue, setDebouncedValue] = useState(query.search || '');

  useDebounce(
    () => {
      setDebouncedValue(value);
    },
    500,
    [value],
  );

  useEffect(
    () => {
      const newSearch = queryString.stringify(
        pickBy({
          ...query,
          search: debouncedValue,
        }),
      );

      history.push(`${pathname}${newSearch ? '?' + newSearch : ''}`);
    },
    // eslint-disable-next-line
    [debouncedValue],
  );

  return (
    <Search
      value={value}
      placeholder={placeholder}
      onChange={e => setValue(e.target.value)}
      onClear={() => setValue('')}
    />
  );
};

export default LocationAwareSearch;
