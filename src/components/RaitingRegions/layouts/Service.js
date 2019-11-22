import React from 'react';

class Service extends React.Component {

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
        <div className="w-full text-gray-400 text-base">Услуга</div>
        <div className="w-full flex text-xs pt-2">
          <div className={"w-auto cursor-pointer " + (this.state.isView ? 'text-yellow-500' : 'light-gray-text')} onClick={(env) => this.viewClick(true)}>Худшая</div>
          <div className={"w-auto pl-3 cursor-pointer " + (!this.state.isView ? 'text-yellow-500' : 'light-gray-text')} onClick={(env) => this.viewClick(false)}>Лучшая</div>
        </div>
        {this.state.isView &&
          <div className="w-full flex">
            <div className="text-5xl font-medium text-gray-300">{this.props.data.down.rate}</div>
            <div className="px-4 pt-8">
              <img src={require("../../../assets/images/arrow-down.png")} className="h-5" alt="arrow-down" />
            </div>
            <div className="text-xl font-normal light-gray-text pt-8">от {this.props.data.down.from}</div>
          </div>
        }
        {!this.state.isView &&
          <div className="w-full flex" >
            <div className="text-5xl font-medium text-gray-300">{this.props.data.up.rate}</div>
            <div className="px-4 pt-8">
              <img src={require("../../../assets/images/arrow-up.png")} className="h-5" alt="arrow-up" />
            </div>
            <div className="text-xl font-normal light-gray-text pt-8">от {this.props.data.up.from}</div>
          </div>
        }
        <div className="w-full text-xs pt-2">
          <span className="text-yellow-500">{this.state.isView ? this.props.data.down.service : this.props.data.up.service}</span>
        </div>
      </div>
    );
  }
}

export default Service;
