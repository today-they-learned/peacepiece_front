/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
};
export default useInput;
