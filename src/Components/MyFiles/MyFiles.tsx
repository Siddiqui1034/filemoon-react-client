const MyFiles = () => {
  const list = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <div className="w-full space-y-5 flex flex-col h-full min-h-0">
      <div className="flex items-center justify-between shrink-0">
        <h1 className="text-xl font-bold text-purple-500 px-5 tracking-wide">
          My Files
        </h1>
        <div>
          <button className="bg-purple-500 px-3 py-2 rounded-sm text-white space-x-2 hover:scale-102 hover:bg-purple-400">
            <i className="ri-add-circle-fill"></i>
            <span>Add Files</span>
          </button>
        </div>
        {/* "Add Files" button goes here */}
      </div>

      <div className="w-full max-h-[74vh] overflow-y-auto overflow-x-auto min-h-0 flex-1 rounded-sm border border-black bg-white/3 backdrop-blur-md">
        <table className="w-full text-left">
          <thead className="bg-black text-lg sticky top-0 z-10 font-bold uppercase tracking-wider text-white">
            <tr>
              <th className="px-6 py-3 font-medium  max-w-xs truncate">Name</th>
              <th className="px-6 py-3 font-medium ">Type</th>
              <th className="px-6 py-3 font-medium ">Size</th>
              <th className="px-6 py-3 font-medium ">Date</th>
              <th className="py-3 font-medium text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {list.map((_, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-purple-100" : "bg-white"}
              >
                <td className="px-6 py-4 font-medium text-slate-700 max-w-xs truncate">
                  Introduction of React.pdf
                </td>
                <td className="px-6 py-3 text-slate-700">PDF</td>
                <td className="px-6 py-3 text-slate-700">2.4 MB</td>
                <td className="px-6 py-3 text-slate-700">Oct 14, 2026</td>
                <td className="py-3 text-start">
                  <div className="flex items-center justify-center gap-4 ">
                    <button className="p-0.5 w-8 h-8 text-lg bg-green-600 text-white border hover:bg-green-400  hover:text-white hover:scale-105 rounded-sm transition-colors">
                      <i className="ri-pencil-line"></i>
                    </button>
                    <button className="p-0.5 w-8 h-8 text-lg bg-red-600 text-white border hover:bg-red-400 hover:text-white  hover:scale-105 rounded-sm transition-colors">
                      <i className="ri-delete-bin-6-line"></i>
                    </button>
                    <button className="p-0.5 w-8 h-8 text-lg bg-purple-600 text-white border hover:bg-purple-400 hover:text-white hover:scale-105 rounded-sm transition-colors">
                      <i className="ri-share-line"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFiles;
