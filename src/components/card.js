const Card = () => {
  return (
    
    <div>
      <div className="bg-black rounded-lg shadow-lg w-64">
        <div className="px-3 pb-3 pt-3">
      <img src="/album1.webp" alt="Card Image" className="w-full h-full object-cover rounded-t-lg" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white">Olivia Rodrigo Mix</h2>
        {/* <p className="text-gray-600 mt-2 text-white">Olivia Rodrigo Mix</p> */}
        <a href="#" className="text-blue-500 mt-4 inline-block">Conon Gray, One Direction and Billie Eillish</a>
      </div>
    </div>
  </div>
  );
};

export default Card;
