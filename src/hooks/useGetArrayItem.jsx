import { useState, useEffect } from "react";

const useGetArrayItem = (array, arraySearchFn) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!Array.isArray(array) || typeof arraySearchFn !== "function") {
      console.warn("Invalid input to useGetArrayItem hook");
      setItem(null);
      return;
    }

    // const arrayItem = array.find(arraySearchFn);
    const arrayItem = array.filter(arraySearchFn);
    setItem(arrayItem);
  }, [array, arraySearchFn]);

  return item;
};

export default useGetArrayItem;
