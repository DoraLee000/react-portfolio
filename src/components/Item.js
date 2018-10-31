import React from 'react';

class Item extends React.Component{
  constructor(props) {
		super(props)
	}

	render() {
		return (
			<div 
				className="item_content" 
				key={this.props.data.Key}
			>
			<div>
				<img src={this.props.data.images}/>
			</div>
			<div>
				<h5>{this.props.data.Name}</h5>
				<p className="col2"><i className="fas fa-university"></i>{this.props.data.Category}</p>
				<p className="col2"><i className="fas fa-map-marker-alt"></i>{this.props.data.Add}</p>
				<p><i className="fas fa-clock"></i>{this.props.data.Opentime}</p>
				<p><i className="fas fa-ticket-alt"></i>{this.props.data.Ticketinfo}</p>
				<p><i className="fas fa-globe-americas"></i><a href={this.props.data.Web} target="_blank" >官方網站</a></p>
      </div>
			</div>  
		);
	}
}
export default Item;
