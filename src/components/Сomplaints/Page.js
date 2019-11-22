import React from 'react';
import AllCount from './layouts/AllCount'
import Departments from './layouts/Departments'
import Akimats from './layouts/Akimats'
import Organizations from './layouts/Organizations'
import AllComplaint from './layouts/AllComplaint'
import ComplaintsDay from './layouts/ComplaintsDay'

class Page extends React.Component {

  constructor(props) {
    super(props);
    this.data = {
      allcount: {all: 759, up: 198, down: 33},
      departaments: {all: 153, up: 69, down: 114, bad: 'МВД РК', bad_star: 2.1},
      akimats: {all: 248, up: 52, down: 196, bad: 'г.Семей', bad_star: 1.8},
      organizations: {all: 358, up: 127, down: 231, bad: 'ЦОН Наурызбай. р-н, г.Алматы', bad_star: 2.5},
      allcomplaint: {
        departaments: [
          {
            id: 1,
            name: 'ЦОН Сарыакинского р-н, г. Нур-Султан',
            text: 'Прошу разобраться! 30 сентября поехала в цон медеуского района хотеля подать документы на единовременную адресную помощь, но менеджер ответи грубо',
            date: '18.11.19 - 15:21',
            phone: '+7 701 234 55 25',
            rate: 3.4
          },
          {
            id: 1,
            name: 'ЦЗН Головной офис, г. Алматы',
            text: 'Большие очереди, менеджеры долго обслуживают, душно, база зависает, все на нервах. Дурдом, а не ЦЗН. Примите меры!',
            date: '18.11.19 - 14:58',
            phone: '+7 701 234 55 25',
            rate: 2.5
          },
          {
            id: 1,
            name: 'ЦЗН Головной офис, г. Алматы',
            text: 'Большие очереди, менеджеры долго обслуживают, душно, база зависает, все на нервах. Дурдом, а не ЦЗН. Примите меры!',
            date: '18.11.19 - 14:58',
            phone: '+7 701 234 55 25',
            rate: 2.5
          }
        ],
        akimats: [],
        organizations: []
      },
      days: [
        [{'20:00':400},{'19:00':400},{'18:00':400},{'17:00':400},{'16:00':400},{'15:00':400},{'14:00':400},{'13:00':400},{'12:00':400},{'11:00':400},{'10:00':400},{'09:00':400},{'08:00':400}],
        [{'20:00':400},{'19:00':400},{'18:00':400},{'17:00':400},{'16:00':400},{'15:00':400},{'14:00':400},{'13:00':400},{'12:00':400},{'11:00':400},{'10:00':400},{'09:00':400},{'08:00':400}],
        [{'20:00':400},{'19:00':400},{'18:00':400},{'17:00':400},{'16:00':400},{'15:00':400},{'14:00':400},{'13:00':400},{'12:00':400},{'11:00':400},{'10:00':400},{'09:00':400},{'08:00':400}],
        [{'20:00':400},{'19:00':400},{'18:00':400},{'17:00':400},{'16:00':400},{'15:00':400},{'14:00':400},{'13:00':400},{'12:00':400},{'11:00':400},{'10:00':400},{'09:00':400},{'08:00':400}],
        [{'20:00':400},{'19:00':400},{'18:00':400},{'17:00':400},{'16:00':400},{'15:00':400},{'14:00':400},{'13:00':400},{'12:00':400},{'11:00':400},{'10:00':400},{'09:00':400},{'08:00':400}],
        [{'20:00':400},{'19:00':400},{'18:00':400},{'17:00':400},{'16:00':400},{'15:00':400},{'14:00':400},{'13:00':400},{'12:00':400},{'11:00':400},{'10:00':400},{'09:00':400},{'08:00':400}],
        [{'20:00':400},{'19:00':400},{'18:00':400},{'17:00':400},{'16:00':400},{'15:00':400},{'14:00':400},{'13:00':400},{'12:00':400},{'11:00':400},{'10:00':400},{'09:00':400},{'08:00':400}],
      ]
    }
  }

  render() {
    return (
      <div className="w-full h-auto p-2 flex flex-wrap">
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
          <AllCount data={this.data.allcount} />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
          <Departments data={this.data.departaments} />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
          <Akimats data={this.data.akimats} />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
          <Organizations data={this.data.organizations} />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4 h-auto p-2">
          1
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
          <ComplaintsDay data={this.data.days} />
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 h-auto p-2">
          <AllComplaint data={this.data.allcomplaint} />
        </div>
      </div>
    );
  }
}

export default Page;
