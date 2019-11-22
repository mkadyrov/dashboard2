import React from 'react';
import Back from '../assets/images/arrow-left.png';

function Breadcrumbs () {
  return (
    <div className="w-full h-12 pt-2 flex items-center">
      <div className="w-auto px-4 text-lg flex items-center">
        <img src={Back} className="float-left h-4 pr-4 mt-1" alt="back" />
        <span className="light-gray-text">Главная</span>
        <span className="light-gray-text px-2">/</span>
        <span className="text-gray-200">Рейтинг Регионов</span>
      </div>
    </div>
  );
}

export default Breadcrumbs;
