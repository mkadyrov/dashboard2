import React from 'react';
import Star from '../../../assets/images/star.png';

class RaitingStarView extends React.Component {

  constructor(props) {
    super(props);
    this.props.item.percent = Math.round(Number(this.props.item.rate) * 100 / 5);
  }

  render() {
    return (
      <div className="w-full h-auto text-gray-400 text-xs flex py-3 border-b border-gray-800">
        <div className="w-10/12">{this.props.item.id}. {this.props.item.name}</div>
        <div className="w-2/12 h-8 pt-1 pl-2 text-right relative text-sm">
          <img src={Star} className="h-2 absolute left-0 top-0 ml-3 mt-2" />
          <span>{this.props.item.rate}</span>
        </div>
      </div>
    );
  }
}

export default RaitingStarView;
