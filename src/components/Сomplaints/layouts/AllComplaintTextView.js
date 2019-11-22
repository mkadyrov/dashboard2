import React from 'react';
import Star from '../../../assets/images/star.png';
import StarGray from '../../../assets/images/star-gray.png';

class AllComplaintTextView extends React.Component {

  constructor(props) {
    super(props);
    this.props.item.percent = Math.round(Number(this.props.item.rate) * 100 / 5);
    this.props.item.rates = [];
    for (let i = 1; i < 6; i++) {
      if (this.props.item.rate <= i) {
        this.props.item.rates.push(StarGray)
      } else {
        this.props.item.rates.push(Star)
      }
    }
  }

  render() {
    return (
      <div className="w-full h-auto text-gray-400 py-3 border-b border-gray-800">
        <div className="w-full text-2xs">
          <div className="w-auto float-left light-gray-text">{this.props.item.date}</div>
          <div className="w-auto float-right text-yellow-500">
            <span className="text-yellow-500 cursor-pointer hover:text-yellow-700">{this.props.item.name}</span>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="w-full text-xs text-gray-300 pt-2 pb-1">
          {this.props.item.text}
        </div>
        <div className="w-full text-xs text-gray-300 pb-2">
          <span className="text-yellow-500 cursor-pointer hover:text-yellow-700">Подробнее</span>
        </div>
        <div className="w-full text-2xs">
          <div className="w-auto float-left light-gray-text">{this.props.item.phone}</div>
          <div className="w-auto float-right text-yellow-500">
            {this.props.item.rates.map((src) =>
              <img src={src} alt="star" className="h-2 ml-2 mt-1 float-left" />
            )}
            <span className="text-gray-300 pl-2 text-xs mt-0">{this.props.item.rate}</span>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

export default AllComplaintTextView;
