import React from 'react';
import Icon from '../assets/images/icon.png';

function Footer () {
  return (
    <div className="header w-full h-auto sm:h-auto md:h-auto lg:h-16 xl:h-16">
      <div className="float-left w-16 h-16 status items-center hidden sm:hidden md:hidden lg:flex xl:flex">
        <img src={Icon} className="w-auto h-6 m-auto" alt="icon" />
      </div>
      <div className="w-auto float-none sm:float-none md:float-none lg:float-left xl:float-left h-auto sm:h-auto md:h-auto lg:h-16 xl:h-16 px-4 pt-3 text-center sm:text-center md:text-center lg:text-left xl:text-left">
        <div className="w-full text-xs text-yellow-500">ЦОН Сарыаркинского района г.Нур-Султан</div>
        <div className="w-full text-sm text-gray-400 pb-3">
          Прошу разобраться! 30 сентября поехала в цон медеуского района хотеля подать документы на единовременную адресную помощь, но менеджер ответи гру...
        </div>
      </div>
    </div>
  );
}

export default Footer;
