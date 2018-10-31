import React from 'react';
import zipCodes from '../data/zipCodes.json';

class RegionSelect extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      areaIdx: 0,
      cityIdx: 0,
    }
  }
  onChangeArea = (e)=>{
    var areaId = e.target.value;    
    this.setState({
      areaIdx: areaId,
      cityIdx: 0,
      area: areaId,
    });
    this.props.changeOption(areaId);
  }
  onChangeCity = (e)=>{
    var val = e.target.value;    
    this.setState({
      cityIdx: val,
      country: val,
    });
    this.props.onCityChange(val);
  }

  render() {
    const {areaIdx,cityIdx} = this.state;
    const area = zipCodes[areaIdx];
    const city = area.country[cityIdx];
    return(
      <section className="select-bar">
        <div>
          
          <select value={areaIdx} onChange={this.onChangeArea}>
          {zipCodes.map(({areas},idx)=><option value={idx} key={areas}>{areas}</option>)}
          </select>
        </div>
        <div>
          <select value={cityIdx} onChange={this.onChangeCity} id="City">
          {area.country.map(({name},idx)=><option value={name} key={name}>{name}</option>)}
          </select>
        </div>
      </section>
    )
  }
}

export default RegionSelect;