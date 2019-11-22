import React from 'react';
import RaitingStarView from './RaitingStarView';
import ScrollArea from 'react-scrollbar';


class RaitingCity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isView: true};
    this.arrayPlus = [
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
    this.arrayMinus = [
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
        <div className="w-full text-gray-400 text-base">Рейтинг городов</div>
        <div className="w-full flex text-xs pt-2 pb-5">
          <div className={"w-auto cursor-pointer " + (this.state.isView ? 'text-yellow-500' : 'light-gray-text')} onClick={(env) => this.viewClick(true)}>Худшие</div>
          <div className={"w-auto pl-3 cursor-pointer " + (!this.state.isView ? 'text-yellow-500' : 'light-gray-text')} onClick={(env) => this.viewClick(false)}>Лучшие</div>
        </div>
        <ScrollArea className="w-full h-20 pr-4" horizontal={false}>
          {this.state.isView ? this.arrayPlus.map((item, index) => <RaitingStarView key={index} item={item} index={index + 1} />) : this.arrayMinus.map((item, index) => <RaitingStarView key={index} item={item} index={index + 1} />)}
        </ScrollArea>
      </div>
    );
  }
}

export default RaitingCity;
