import React from 'react';
import Region from './layouts/Region'
import City from './layouts/City'
import District from './layouts/District'
import Service from './layouts/Service'
import RaitingRegion from './layouts/RaitingRegion'
import RaitingCity from './layouts/RaitingCity'
import RaitingDistrict from './layouts/RaitingDistrict'
import RaitingService from './layouts/RaitingService'

function RaitingRegionsPage () {

  return (
    <div className="w-full h-auto p-2 flex flex-wrap">
      <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
        <Region />
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
        <City />
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
        <District />
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
        <Service />
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
        <RaitingRegion />
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
        <RaitingCity />
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
        <RaitingDistrict />
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
        <RaitingService />
      </div>
    </div>
  );
}

export default RaitingRegionsPage;
