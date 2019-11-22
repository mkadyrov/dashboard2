import React from 'react';
import RaitingTextView from './RaitingTextView';
import ScrollArea from 'react-scrollbar';

class RaitingCity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isView: true};
    this.arrayPlus = [
      {id: 1, rate: '1.4', name: 'Постановка ребенка в очередь в детский сад'},
      {id: 2, rate: '1.5', name: 'Выдача справки о наличии либо отсутствии судимости'},
      {id: 3, rate: '1.6', name: 'Получения справки об участии юридического лица в других юридических лицах'},
      {id: 4, rate: '1.7', name: 'Выдача справки о наличии либо отсутствии судимости'},
      {id: 5, rate: '1.9', name: 'Постановка ребенка в очередь в детский сад'},
    ]
    this.arrayMinus = [
      {id: 1, rate: '1.4', name: 'Постановка ребенка в очередь в детский сад'},
      {id: 2, rate: '1.5', name: 'Выдача справки о наличии либо отсутствии судимости'},
      {id: 3, rate: '1.6', name: 'Получения справки об участии юридического лица в других юридических лицах'},
      {id: 4, rate: '1.7', name: 'Выдача справки о наличии либо отсутствии судимости'},
      {id: 5, rate: '1.9', name: 'Постановка ребенка в очередь в детский сад'},
    ]
    this.viewClick = this.viewClick.bind(this);
  }

  viewClick (view) {
    this.setState(state => ({
      isView: view
    }));
  }

  render() {
    return (
      <div className="w-full h-auto p-4 relative border rounded border-gray-800">
        <div className="w-full text-gray-400 text-base">Рейтинг услуг</div>
        <div className="w-full flex text-xs pt-2 pb-5">
          <div className={"w-auto cursor-pointer " + (this.state.isView ? 'text-yellow-500' : 'light-gray-text')} onClick={(env) => this.viewClick(true)}>Популярные</div>
          <div className={"w-auto pl-3 cursor-pointer " + (!this.state.isView ? 'text-yellow-500' : 'light-gray-text')} onClick={(env) => this.viewClick(false)}>Не популярные</div>
        </div>
        <ScrollArea className="w-full border-t border-gray-800 h-20" horizontal={false}>
          {this.state.isView ? this.arrayPlus.map((item, index) => <RaitingTextView key={index} item={item} index={index + 1} />) : this.arrayMinus.map((item, index) => <RaitingTextView key={index} item={item} index={index + 1} />)}
        </ScrollArea>
      </div>
    );
  }
}

export default RaitingCity;
