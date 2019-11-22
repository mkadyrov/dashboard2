import React from 'react';
import Region from './layouts/Region'
import City from './layouts/City'
import District from './layouts/District'
import Service from './layouts/Service'
import RaitingRegion from './layouts/RaitingRegion'
import RaitingCity from './layouts/RaitingCity'
import RaitingDistrict from './layouts/RaitingDistrict'
import RaitingService from './layouts/RaitingService'

class RaitingRegionsPage extends React.Component {

  constructor(props) {
    super(props);
    this.data = {
      region: {
        up: {name: 'Павлодарская область', rate: 3.3, from: 2.6, user: 'Булат Жумабекович Бакауов', img: ''},
        down: {name: 'Карагандинская область', rate: 2.1, from: 2.2, user: 'Булат Жумабекович Бакауов2', img: ''},
      },
      city: {
        up: {name: 'г. Палодар', rate: 3.3, from: 2.6, user: 'Булат Жумабекович Бакауов', img: ''},
        down: {name: 'г. Караганда', rate: 2.1, from: 2.2, user: 'Булат Жумабекович Бакауов2', img: ''},
      },
      district: {
        up: {name: 'Иртышский район', rate: 3.3, from: 2.6, user: 'Булат Жумабекович Бакауов', img: ''},
        down: {name: 'Октябрьский район', rate: 2.1, from: 2.2, user: 'Булат Жумабекович Бакауов2', img: ''},
      },
      service: {
        up: {service: 'Постановка ребенка в очередь в детский сад', rate: 3.3, from: 2.6, user: 'Булат Жумабекович Бакауов'},
        down: {service: 'Постановка ребенка в очередь в детский сад 2', rate: 2.1, from: 2.2, user: 'Булат Жумабекович Бакауов2'},
      },
      raitingregion: {
        up: [],
        down: [
          {id: 1, rate: '4.2', name: 'Алматинская'},
          {id: 2, rate: '3.9', name: 'Акмолинская'},
          {id: 3, rate: '3.5', name: 'Туркестанская'},
          {id: 4, rate: '3.4', name: 'ЗКО'},
          {id: 5, rate: '3.0', name: 'Костанайская'},
          {id: 6, rate: '2.9', name: 'Жамбылская'},
          {id: 7, rate: '2.9', name: 'Актюбинская'},
          {id: 8, rate: '2.7', name: 'Кызылординская'},
          {id: 9, rate: '2.6', name: 'СКО'},
          {id: 10, rate: '2.5', name: 'Атырауская'},
          {id: 11, rate: '2.3', name: 'Мангыстауская'},
        ]
      },
      raitingcity: {
        up: [],
        down: [
          {id: 1, rate: '4.2', name: 'Павлодар'},
          {id: 2, rate: '3.9', name: 'Семей'},
          {id: 3, rate: '3.5', name: 'Экибастуз'},
          {id: 4, rate: '3.4', name: 'Кызылорда'},
          {id: 5, rate: '3.0', name: 'Актобе'},
          {id: 6, rate: '2.9', name: 'Тараз'},
          {id: 7, rate: '2.9', name: 'Уральск'},
          {id: 8, rate: '2.7', name: 'Туркестан'},
          {id: 9, rate: '2.6', name: 'Рудный'},
          {id: 10, rate: '2.5', name: 'Темиртау'},
          {id: 10, rate: '2.5', name: 'Караганда'},
        ]
      },
      raitingdistrict: {
        up: [],
        down: [
          {id: 1, rate: '4.2', name: 'Иртышский'},
          {id: 2, rate: '3.9', name: 'Жамбылский'},
          {id: 3, rate: '3.5', name: 'Сайрамский'},
          {id: 4, rate: '3.4', name: 'Денисовский'},
          {id: 5, rate: '3.0', name: 'Аральский'},
          {id: 6, rate: '2.9', name: 'Мунайлинский'},
          {id: 7, rate: '2.9', name: 'Сырымский'},
          {id: 8, rate: '2.7', name: 'Темирский'},
          {id: 9, rate: '2.6', name: 'Жаксынский'},
          {id: 10, rate: '2.5', name: 'Уильский'},
          {id: 10, rate: '2.5', name: 'Сайрамский'},
        ]
      },
      raitingservice: {
        up: [
          {id: 1, rate: '1.4', name: 'Постановка ребенка в очередь в детский сад'},
          {id: 2, rate: '1.5', name: 'Выдача справки о наличии либо отсутствии судимости'},
          {id: 3, rate: '1.6', name: 'Получения справки об участии юридического лица в других юридических лицах'},
          {id: 4, rate: '1.7', name: 'Выдача справки о наличии либо отсутствии судимости'},
          {id: 5, rate: '1.9', name: 'Постановка ребенка в очередь в детский сад'},
        ],
        down: []
      },
    }
  }

  render () {
    return (
      <div className="w-full h-auto p-2 flex flex-wrap">
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
          <Region data={this.data.region} />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
          <City data={this.data.city} />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
          <District data={this.data.district} />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
          <Service data={this.data.service} />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
          <RaitingRegion data={this.data.raitingregion} />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
          <RaitingCity data={this.data.raitingcity} />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
          <RaitingDistrict data={this.data.raitingdistrict} />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
          <RaitingService data={this.data.raitingservice} />
        </div>
      </div>
    );
  }
}

export default RaitingRegionsPage;
