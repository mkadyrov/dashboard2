import React from 'react';
import RaitingStarView from './RaitingStarView';
import ScrollArea from 'react-scrollbar';

class RaitingRegion extends React.Component {

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
        <div className="w-full text-gray-400 text-base">Рейтинг областей</div>
        <div className="w-full flex text-xs pt-2 pb-5">
          <div className={"w-auto cursor-pointer " + (this.state.isView ? 'text-yellow-500' : 'light-gray-text')} onClick={(env) => this.viewClick(true)}>Худшие</div>
          <div className={"w-auto pl-3 cursor-pointer " + (!this.state.isView ? 'text-yellow-500' : 'light-gray-text')} onClick={(env) => this.viewClick(false)}>Лучшие</div>
        </div>
        <ScrollArea className="w-full h-20 pr-4" horizontal={false}>
          {this.state.isView ? this.props.data.down.map((item, index) => <RaitingStarView key={index} item={item} index={index + 1} />) : this.props.data.up.map((item, index) => <RaitingStarView key={index} item={item} index={index + 1} />)}
        </ScrollArea>
      </div>
    );
  }
}

export default RaitingRegion;
