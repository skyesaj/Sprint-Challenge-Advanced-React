import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key, initialValues) => {
  const [value, setValue] = useLocalStorage(key, initialValues);

  useEffect(() => {
    if (value == true) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
  }, [value]);

  return [value, setValue];
};

export default useDarkMode;
