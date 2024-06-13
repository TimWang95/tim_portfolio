import { useState } from 'react';

const useActive = () => {
  const [active, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!active);
  }

  return { active, setActive, handleToggle};
}

export default useActive;