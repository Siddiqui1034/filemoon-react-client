const History = () => {
  const list = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <div className="w-full space-y-5 flex flex-col h-full min-h-0">
      <div className="flex items-center justify-between shrink-0">
        <h1 className="text-xl font-bold text-purple-500 px-5 tracking-wide">
          Historys
        </h1>
      </div>

      <div className="w-full max-h-[74vh] overflow-y-auto overflow-x-auto min-h-0 flex-1 rounded-sm border border-black bg-white/3 backdrop-blur-md">
        <table className="w-full text-left">
          <thead className="bg-black text-lg sticky top-0 z-10 font-bold uppercase tracking-wider text-white">
            <tr>
              <th className="px-6 py-3 font-medium  max-w-xs truncate">
                File Name
              </th>
              <th className="px-6 py-3 font-medium ">Shared With</th>
              <th className="px-6 py-3 font-medium ">Shared At</th>
              <th className="px-6 py-3 font-medium ">Expires At</th>
              <th className="py-3 font-medium text-center">Status</th>
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
                  <div className="flex items-center justify-end gap-2">
                    <button
                      title="Copy Link"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/5"
                    >
                      <i className="ri-file-copy-line"></i>
                    </button>
                    <button
                      title="Revoke Access"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-white/5"
                    >
                      <i className="ri-close-circle-line"></i>
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

export default History;
