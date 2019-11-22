import React from 'react';
import RaitingTextView from './RaitingTextView';
import ScrollArea from 'react-scrollbar';

class RaitingCity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isView: true};
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
        <ScrollArea className="w-full border-t border-gray-800 h-20 pr-2" horizontal={false}>
          {this.state.isView ? this.props.data.up.map((item, index) => <RaitingTextView key={index} item={item} index={index + 1} />) : this.props.data.down.map((item, index) => <RaitingTextView key={index} item={item} index={index + 1} />)}
        </ScrollArea>
      </div>
    );
  }
}

export default RaitingCity;
