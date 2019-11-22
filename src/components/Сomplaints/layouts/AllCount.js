import React from 'react';

function AllCount (props) {
  return (
    <div className="w-full h-auto p-4 relative border rounded border-gray-800">
      <div className="w-full text-gray-400 text-base">Общее количество</div>
      <div className="w-full">
        <span className="text-6xl font-medium text-gray-300 pr-4">{props.data.all}</span>
        <span className="text-green-600 text-2xl">{props.data.up}</span>
        <span className="px-2 text-gray-600 text-2xl">/</span>
        <span className="text-red-600 text-2xl">{props.data.down}</span>
      </div>
      <div className="w-full flex pt-2">
        <div className="w-auto flex">
          <div className="w-2 h-2 rounded-full bg-green-600 mt-1-5"></div>
          <div className="w-auto text-xs pl-2 light-gray-text">Обработанные</div>
        </div>
        <div className="w-auto flex pl-4">
          <div className="w-2 h-2 rounded-full bg-red-600 mt-1-5"></div>
          <div className="w-auto text-xs pl-2 light-gray-text">Не обработанные</div>
        </div>
      </div>
    </div>
  );
}

export default AllCount;
