const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-10 text-sm text-gray-700">
      <button className="px-3 py-1 rounded hover:underline">Previous</button>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 9, 10].map((num, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded ${
              num === 2
                ? "bg-green-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
      <button className="px-3 py-1 rounded hover:underline">Next</button>
    </div>
  );
};

export default Pagination;
