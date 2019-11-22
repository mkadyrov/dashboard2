import React from 'react';
import AllComplaintTextView from './AllComplaintTextView';
import ScrollArea from 'react-scrollbar';

class ComplaintsDay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isView: 1};
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
        <div className="w-full text-gray-400 text-base">Жалобы по времени суток</div>
        <div className="w-full flex text-xs pt-2 pb-5">
          <div className={"w-auto cursor-pointer " + (this.state.isView === 1 ? 'text-yellow-500' : 'light-gray-text hover:text-gray-500')} onClick={(env) => this.viewClick(1)}>Министерства</div>
          <div className={"w-auto pl-3 cursor-pointer " + (this.state.isView === 2 ? 'text-yellow-500' : 'light-gray-text hover:text-gray-500')} onClick={(env) => this.viewClick(2)}>Акиматы</div>
          <div className={"w-auto pl-3 cursor-pointer " + (this.state.isView === 3 ? 'text-yellow-500' : 'light-gray-text hover:text-gray-500')} onClick={(env) => this.viewClick(3)}>Организации</div>
        </div>
        <div className="w-full h-20 pr-2 flex text-2xs">
          <div class="w-1-8">
            {this.props.data.map((days_times, i) =>
              i < 1 ? days_times.map((times, i2) =>
                <div class="w-full h-4-1 mt-1 text-center light-gray-text p1">
                  {Object.keys(times)[0]}
                </div>) : null
            )}
          </div>
          {this.props.data.map((days, i) =>
            <div class="w-1-8">
              {days.map((values, i2) =>
                <div class="w-full h-4-1 mt-1 pl-1">
                  <div class={"w-full h-full bg-gray-800" + (Number(Object.values(values)[0]) < 101 ? '' : Number(Object.values(values)[0]) < 201 ? '' : Number(Object.values(values)[0]) < 301 ? '' : Number(Object.values(values)[0]) > 300 ? '' : 'bg-gray-800')}></div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ComplaintsDay;
