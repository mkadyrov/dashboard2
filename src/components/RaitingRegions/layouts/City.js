import React from 'react';

class City extends React.Component {

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
        <div className="w-full text-gray-400 text-base">Город</div>
        <div className="w-32 absolute right-0 top-0 m-5 mr-4 text-xs leading-tight text-gray-400">
          <img src={this.state.isView ? this.props.data.down.img : this.props.data.up.img} className="w-8 h-8 float-left mr-4" alt="gerb" />
          <span>{this.state.isView ? this.props.data.down.name : this.props.data.up.name}</span>
        </div>
        <div className="w-full flex text-xs pt-2">
          <div className={"w-auto cursor-pointer " + (this.state.isView ? 'text-yellow-500' : 'light-gray-text')} onClick={(env) => this.viewClick(true)}>Худший</div>
          <div className={"w-auto pl-3 cursor-pointer " + (!this.state.isView ? 'text-yellow-500' : 'light-gray-text')} onClick={(env) => this.viewClick(false)}>Лучший</div>
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
          <span className="light-gray-text">Ответственный : </span>
          <span className="text-yellow-500">{this.state.isView ? this.props.data.down.user : this.props.data.up.user}</span>
        </div>
      </div>
    );
  }
}

export default City;
