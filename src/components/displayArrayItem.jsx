import useGetArrayItem from "../hooks/useGetArrayItem";

const DisplayArrayItem = () => {
  const myArray = ["Chika", "Ekene", "Nnenna", "Chiamaka"];

  const arraySearchFn = (item) => {return item.includes("Chika")};

  const selectedItem = useGetArrayItem(myArray, arraySearchFn);

  return (
    <div>
      <h1>Selected Item:</h1>
      <p>{`${selectedItem}`}</p>
    </div>
  );
};

export default DisplayArrayItem;
