import { useState } from 'react';

export default function useCustomHook(initialVal) {
  const [val, setVal] = useState(initialVal);
  const flip = () => {
    return setVal(!val);
  };
  return [val, flip];
}
