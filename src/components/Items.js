import React from 'react';
import ToursData from '../data/ToursData.json';
import Item ,{myFavoriteTrip} from'./Item';


class Items extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return(
      <div className="item-list" id="List">
        {this.props.data.map((item)=> {
          return<Item data={item} addFavorite={this.addFavorite} key={item.Key}/>
        })
        }
      </div>
    )
  }
}
export default Items;