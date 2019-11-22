import React from 'react';
import Logo from '../assets/images/logo.png';

function Header () {
  return (
    <div className="header w-full h-16">
      <div className="hidden sm:hidden md:hidden lg:flex xl:flex w-auto float-left h-16 px-4 relative flex items-center">
        <img src={Logo} className="w-auto h-6" alt="logo" />
        <div className="border-l border-gray-800 h-6 mt-5 absolute right-0 top-0"></div>
      </div>
      <div className="w-auto float-left h-16 text-gray-400 text-xs px-4 leading-tight flex items-center">
        Платформа для аналитики<br/>и оценки предоставляемых услуг
      </div>
      <div className="w-auto float-right">
        <div className="float-left w-auto h-16 text-gray-400 text-xs flex items-center px-4">Состояние</div>
        <div className="float-left w-16 h-16 status flex items-center">
          <div className="w-3 h-3 rounded-full bg-yellow-400 m-auto border border-yellow-500"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
