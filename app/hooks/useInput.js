import {useState} from 'react';

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = val => {
    setValue(val);
  };

  return [value, handleChange];
}

export default useInput;
