import React from 'react';
import Star from '../../../assets/images/star.png';

function Organizations (props ){
  return (
    <div className="w-full h-auto p-4 relative border rounded border-gray-800">
      <div className="w-full text-gray-400 text-base">Организации</div>
      <div className="w-full">
        <span className="text-6xl font-medium text-gray-300 pr-4">{props.data.all}</span>
        <span className="text-green-600 text-2xl">{props.data.up}</span>
        <span className="px-2 text-gray-600 text-2xl">/</span>
        <span className="text-red-600 text-2xl">{props.data.down}</span>
      </div>
      <div className="w-full flex pt-2 light-gray-text text-xs">
        Худшая орг.:
        <span>
          <span className="text-gray-300 px-1">{props.data.bad}</span>
          ( <img src={Star} className="h-2 inline mb-1" alt="star" /> <span className="text-red-500">{props.data.bad_star}</span> )
        </span>
      </div>
    </div>
  );
}

export default Organizations;
