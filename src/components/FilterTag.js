import React from 'react';

class FilterTag extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      visibility:'all'
    }
    this.hanldeVisibility = this.hanldeVisibility.bind(this);
  }
  // hanldeVisibility(event){
  //   this.setState({visibility: event.target.value});
  // }
  render(){
    return(
      <div>
        <button value="all" onClick={this.hanldeVisibility}>全部</button>
        <button value="view"  onClick={this.hanldeVisibility}>景點</button>
        <button value="shopping"  onClick={this.hanldeVisibility}>購物</button>
        <button value="food"  onClick={this.hanldeVisibility}>美食</button>
      </div>
    )
  }
}

export default FilterTag;