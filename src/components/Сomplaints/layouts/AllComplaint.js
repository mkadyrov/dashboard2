import React from 'react';
import AllComplaintTextView from './AllComplaintTextView';
import ScrollArea from 'react-scrollbar';

class AllComplaint extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isView: 1};
    this.viewClick = this.viewClick.bind(this);
  }

  viewClick (view) {
    this.setState(state => ({
      isView: view
    }));
    console.log(view)
  }

  render() {
    return (
      <div className="w-full h-auto p-4 relative border rounded border-gray-800">
        <div className="w-full text-gray-400 text-base">Все жалобы</div>
        <div className="w-full flex text-xs pt-2 pb-5">
          <div className={"w-auto cursor-pointer " + (this.state.isView === 1 ? 'text-yellow-500' : 'light-gray-text hover:text-gray-500')} onClick={(env) => this.viewClick(1)}>Министерства</div>
          <div className={"w-auto pl-3 cursor-pointer " + (this.state.isView === 2 ? 'text-yellow-500' : 'light-gray-text hover:text-gray-500')} onClick={(env) => this.viewClick(2)}>Акиматы</div>
          <div className={"w-auto pl-3 cursor-pointer " + (this.state.isView === 3 ? 'text-yellow-500' : 'light-gray-text hover:text-gray-500')} onClick={(env) => this.viewClick(3)}>Организации</div>
        </div>
        <ScrollArea className="w-full border-t border-gray-800 h-20 pr-2" horizontal={false}>
          {this.state.isView === 1 ?
            this.props.data.departaments.map((item, index) => <AllComplaintTextView key={index} item={item} index={index + 1} />) : null
          }
          {this.state.isView === 2 ?
            this.props.data.akimats.map((item, index) => <AllComplaintTextView key={index} item={item} index={index + 1} />) : null
          }
          {this.state.isView === 3 ?
            this.props.data.organizations.map((item, index) => <AllComplaintTextView key={index} item={item} index={index + 1} />) : null
          }
        </ScrollArea>
      </div>
    );
  }
}

export default AllComplaint;
