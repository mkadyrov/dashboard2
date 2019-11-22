import React from 'react';

class District extends React.Component {

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
        <div className="w-full text-gray-400 text-base">Район</div>
        <div className="w-32 absolute right-0 top-0 m-5 mr-4 text-xs leading-tight text-gray-400">
          <img src={require("../../../assets/images/gerb_pavlodar.png")} className="w-8 h-8 float-left mr-4" />
          <span>Иртышский район</span>
        </div>
        <div className="w-full flex text-xs pt-2">
          <div className={"w-auto cursor-pointer " + (this.state.isView ? 'text-yellow-500' : 'light-gray-text')} onClick={(env) => this.viewClick(true)}>Худший</div>
          <div className={"w-auto pl-3 cursor-pointer " + (!this.state.isView ? 'text-yellow-500' : 'light-gray-text')} onClick={(env) => this.viewClick(false)}>Лучший</div>
        </div>
        {this.state.isView &&
          <div className="w-full flex">
            <div className="text-5xl font-medium text-gray-300">2.1</div>
            <div className="px-4 pt-8">
              <img src={require("../../../assets/images/arrow-down.png")} className="h-5" />
            </div>
            <div className="text-xl font-normal light-gray-text pt-8">от 2.2</div>
          </div>
        }
        {!this.state.isView &&
          <div className="w-full flex" >
            <div className="text-5xl font-medium text-gray-300">2.1</div>
            <div className="px-4 pt-8">
              <img src={require("../../../assets/images/arrow-up.png")} className="h-5" />
            </div>
            <div className="text-xl font-normal light-gray-text pt-8">от 2.2</div>
          </div>
        }
        <div className="w-full text-xs pt-2">
          <span className="light-gray-text">Ответственный : </span>
          <span className="text-yellow-500">Булат Жумабекович Бакауов</span>
        </div>
      </div>
    );
  }
}

export default District;
