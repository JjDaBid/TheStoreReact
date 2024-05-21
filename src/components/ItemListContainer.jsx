// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
    return (
      <div className="flex flex-col items-center mt-16 bg-gray-100">

        <h1 className="text-2xl font-bold text-center mt-6">Greeting</h1>
        <p className="text-lg mt-8 font-bold text-center text-gray-400">{ greeting }</p>
      </div>
    );
  };
  
  export default ItemListContainer;
