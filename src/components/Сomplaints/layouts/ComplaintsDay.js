import React from 'react';
import { Bar } from 'react-chartjs-2';

class ComplaintsDay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isView: 1, days: 1};
    this.viewClick = this.viewClick.bind(this);
    this.dayClick = this.dayClick.bind(this);
    this.axes = [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left', stacked: false }
    ];
    this.series = {type: 'bar'};
  }

  viewClick (view) {
    this.setState(state => ({
      isView: view
    }));
  }

  dayClick (day) {
    this.setState(state => ({
      days: day
    }));
  }

  render() {

    return (
      <div className="w-full h-auto p-4 relative border rounded border-gray-800">
        <div className="w-full text-gray-400 text-base">Жалобы по дням</div>
        <div className="w-full relative">
          <div className="w-auto flex text-xs pt-2 float-none sm:float-none md:float-none lg:float-right xl:float-right">
            <div className={"w-auto cursor-pointer " + (this.state.isView === 1 ? 'text-yellow-500' : 'light-gray-text hover:text-gray-500')} onClick={(env) => this.viewClick(1)}>Министерства</div>
            <div className={"w-auto pl-3 cursor-pointer " + (this.state.isView === 2 ? 'text-yellow-500' : 'light-gray-text hover:text-gray-500')} onClick={(env) => this.viewClick(2)}>Акиматы</div>
            <div className={"w-auto pl-3 cursor-pointer " + (this.state.isView === 3 ? 'text-yellow-500' : 'light-gray-text hover:text-gray-500')} onClick={(env) => this.viewClick(3)}>Организации</div>
          </div>
          <div className="w-auto flex text-xs pt-2 float-none sm:float-none md:float-none lg:float-left xl:float-left">
            <div className={"w-auto cursor-pointer " + (this.state.days === 1 ? 'text-yellow-500' : 'light-gray-text hover:text-gray-500')} onClick={(env) => this.dayClick(1)}>1 день</div>
            <div className={"w-auto pl-3 cursor-pointer " + (this.state.days === 2 ? 'text-yellow-500' : 'light-gray-text hover:text-gray-500')} onClick={(env) => this.dayClick(2)}>7 дней</div>
            <div className={"w-auto pl-3 cursor-pointer " + (this.state.days === 3 ? 'text-yellow-500' : 'light-gray-text hover:text-gray-500')} onClick={(env) => this.dayClick(3)}>1 мес.</div>
            <div className={"w-auto pl-3 cursor-pointer " + (this.state.days === 4 ? 'text-yellow-500' : 'light-gray-text hover:text-gray-500')} onClick={(env) => this.dayClick(4)}>3 мес.</div>
            <div className={"w-auto pl-3 cursor-pointer " + (this.state.days === 5 ? 'text-yellow-500' : 'light-gray-text hover:text-gray-500')} onClick={(env) => this.dayClick(5)}>1 год</div>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="w-full h-20 mt-5">
          <Bar data={this.props.data} />
        </div>
      </div>
    );
  }
}

export default ComplaintsDay;
