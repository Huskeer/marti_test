const FiltersAndSearch = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
      <div className="flex flex-wrap gap-3">
        <select className="border border-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-none">
          <option>Най-скорошни</option>
        </select>
        <select className="border border-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-none">
          <option>Дата</option>
        </select>
        <select className="border border-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-none">
          <option>Целия</option>
        </select>
        <select className="border border-gray-300 text-sm rounded-lg px-3 py-2 focus:outline-none">
          <option>Подредби</option>
        </select>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Намиране на събитие..."
          className="border border-gray-300 text-sm rounded-lg px-3 py-2 w-64 focus:outline-none"
        />
        <button
            style={{ backgroundColor: "#00897B" }}
            className="text-white text-sm px-4 py-2 rounded-lg hover:opacity-90"
            >
          Търси
        </button>
      </div>
    </div>
  );
};

export default FiltersAndSearch;
