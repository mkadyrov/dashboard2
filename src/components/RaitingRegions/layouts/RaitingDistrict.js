import React from 'react';
import RaitingStarView from './RaitingStarView';
import ScrollArea from 'react-scrollbar';

class RaitingDistrict extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isView: true};
    this.arrayPlus = [
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
    this.arrayMinus = [
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
        <div className="w-full text-gray-400 text-base">Рейтинг районов</div>
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

export default RaitingDistrict;
