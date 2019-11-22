import React from 'react';
import Star from '../../../assets/images/star.png';

class RaitingStarView extends React.Component {

  constructor(props) {
    super(props);
    this.props.item.percent = Math.round(Number(this.props.item.rate) * 100 / 5);
  }

  render() {
    return (
      <div className="w-full h-auto text-gray-400 text-xs flex">
        <div className="w-6/12 h-8">
          <span>{this.props.index}. </span>
          <span>{this.props.item.name}</span>
        </div>
        <div className="w-5/12 h-8 pt-2">
          <div className="w-full h-2 rounded-sm bg-gray-800">
            <div className="w-full h-2 rounded-sm bg-yellow-500" style={{width: + (this.props.item.percent) + '%'}}></div>
          </div>
        </div>
        <div className="w-2/12 h-8 pt-1 pl-2 text-right relative">
          <img src={Star} className="h-2 absolute left-0 top-0 ml-2 mt-2" />
          <span>{this.props.item.rate}</span>
        </div>
      </div>
    );
  }
}

export default RaitingStarView;
