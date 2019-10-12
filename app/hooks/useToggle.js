import { useState } from "react";

function useToggle(initialState = false) {
  const [isOpen, setOpen] = useState(initialState);
  const toggle = () => setOpen(!isOpen);

  return [isOpen, toggle];
};

export default useToggle;