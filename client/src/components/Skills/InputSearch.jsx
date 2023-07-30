'use client'
import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const InputSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Aquí puedes implementar la lógica para realizar la búsqueda
    console.log(`Realizando búsqueda: ${searchTerm}`);
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar"
        className="py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-white text-black py-2 px-4 rounded-r-md h-10"
      >
        <RiSearchLine />
      </button>
    </div>
  );
};

export default InputSearch;
