import React, { Component } from 'react';
import { Media } from 'reactstrap';
import Moment from 'react-moment';
let userImgStyle = {
    width: "60px",
    height: "60px",
    objectFit: "cover",
}
let headerStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "0px"
}
let dateAreaStyle = {
    fontSize: "15px",
    color: "gray"
}

class CurrentExpirience extends Component {
    state = {  }
    render() { 
        var now = new Date()
        return ( 
            <Media className="my-5">
                <Media left href="#">
                    {this.props.usExpData.image ? <Media style={userImgStyle} object src={this.props.usExpData.image} alt="Generic placeholder image" /> : <Media object style={userImgStyle} src="http://www.gigabitmagazine.com/sites/default/files/styles/slider_detail/public/topic/image/GettyImages-1017193718_1.jpg?itok=W4-tjXij" /> }
                </Media>
                <Media body className="pl-4">
                    <Media style={headerStyle} heading>
                        {this.props.usExpData.role}
                    </Media>
                    {this.props.usExpData.company}
                    <br/>
                    <div style={dateAreaStyle}>
                        <Moment format="YYYY/MM/DD">
                        {this.props.usExpData.startDate}
                        </Moment> 
                        -
                        {this.props.usExpData.endDate === null ? 
                            <Moment format="YYYY/MM/DD"> 
                                {this.now} 
                            </Moment> : 
                            <Moment format="YYYY/MM/DD"> 
                            {this.props.usExpData.endDate}
                            </Moment> 
                        }
                    <br/>
                    {this.props.usExpData.area && this.props.usExpData.area}
                    <br/>
                    <div style={{color: "black"}}>
                        {this.props.usExpData.description && this.props.usExpData.description}
                        </div>
                    </div>
                    <hr/>
                </Media>
            </Media>
         );
    }
}
 
export default CurrentExpirience;