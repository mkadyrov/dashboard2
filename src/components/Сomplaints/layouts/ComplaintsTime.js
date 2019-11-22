import React from 'react';
import ComplaintsTimeView from './ComplaintsTimeView';
import ScrollArea from 'react-scrollbar';

class ComplaintsTime extends React.Component {

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
        <div className="w-full h-20 pr-2">
          {this.state.isView === 1 ?
            <ComplaintsTimeView data={this.props.data.departaments} /> : null
          }
          {this.state.isView === 1 ?
            <ComplaintsTimeView data={this.props.data.akimats} /> : null
          }
          {this.state.isView === 1 ?
            <ComplaintsTimeView data={this.props.data.organizations} /> : null
          }
          <div className="w-full flex text-2xs mt-1">
            <div class="w-1-8">&nbsp;</div>
            <div class="w-1-8 pl-1 light-gray-text">Пн</div>
            <div class="w-1-8 pl-1 light-gray-text">Вт</div>
            <div class="w-1-8 pl-1 light-gray-text">Ср</div>
            <div class="w-1-8 pl-1 light-gray-text">Чт</div>
            <div class="w-1-8 pl-1 light-gray-text">Пн</div>
            <div class="w-1-8 pl-1 light-gray-text">Сб</div>
            <div class="w-1-8 pl-1 light-gray-text">Вс</div>
          </div>
          <div class="w-full flex mt-2">
            <div class="w-1-8"></div>
            <div class="w-8-1 flex">
              <div class="w-1/4 pl-1">
                <div class="w-full h-1 bg-0-100"></div>
                <div class="w-full mt-1 text-3xs light-gray-text">0 - 100</div>
              </div>
              <div class="w-1/4 pl-1">
                <div class="w-full h-1 bg-101-200"></div>
                <div class="w-full mt-1 text-3xs light-gray-text">101 - 200</div>
              </div>
              <div class="w-1/4 pl-1">
                <div class="w-full h-1 bg-201-300"></div>
                <div class="w-full mt-1 text-3xs light-gray-text">201 - 300</div>
              </div>
              <div class="w-1/4 pl-1">
                <div class="w-full h-1 bg-301-400"></div>
                <div class="w-full mt-1 text-3xs light-gray-text">301 - 400</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ComplaintsTime;
