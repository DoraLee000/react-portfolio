import React from 'react';
import RegionSelect from'../../components/RegionSelect';
import Items from'../../components/Items';
import ToursData from '../../data/ToursData.json';

class FilterForm extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      data:ToursData,
      country:'',
      area:'',
      pageOfItems:[],
    };
    this.hanldeVisibility = this.hanldeVisibility.bind(this);
  }
  handleAreaChange = (areaId) => {
    var filteredData = ToursData.filter(function(item) {
      return item.Id == areaId;
    });
    this.setState({
      pageOfItems: filteredData,
      area: areaId,
    });
  }

  handleCityChange = (val) => {
    var filteredData = ToursData.filter(function(item) {
      return item.Country == val 
    });
    this.setState({
      pageOfItems: filteredData,
      country:val
    });
  }

  hanldeVisibility= (event) => {
    var cityValue = document.getElementById('City').value;
    var filteredTag = ToursData.filter(function(item) {
        return item.Tag == event.target.value && item.Country == cityValue
    });
    this.setState({
      pageOfItems: filteredTag,
    });
  }

  hanldeVisibility= (event) => {
    var cityValue = document.getElementById('City').value;
    var filteredTag = ToursData.filter(function(item) {
        return item.Tag == event.target.value && item.Country == cityValue
    });
    this.setState({
      pageOfItems: filteredTag,
    });
  }

  render() {
    var area = this.state.area;
    return(
      <div className="home-root">
      <div className="box">
        <RegionSelect changeOption={this.handleAreaChange} onCityChange={this.handleCityChange}/>
      </div>
        {area != 0 ? (
          <div className="filterbox">
            <div className="tag">
              <button value="view"  onClick={this.hanldeVisibility}>景點</button>
              <button value="shopping"  onClick={this.hanldeVisibility}>購物</button>
              <button value="food"  onClick={this.hanldeVisibility}>美食</button>
            </div>
          </div>
        ) : (
          <h3 className="title">
            {
              "The world is a book， but people do not travel read only one page"
            }
          </h3>
        )}


      <Items data={this.state.pageOfItems}></Items>
      </div>
    )
  }
}
export default FilterForm;