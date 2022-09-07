import { useState, useCallback, ChangeEvent } from "react";

type onChangeType = (e: ChangeEvent<HTMLTextAreaElement>) => void;

const useTextArea = (initValue = "") => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue] as [string, onChangeType, typeof setValue];
};
export default useTextArea;
