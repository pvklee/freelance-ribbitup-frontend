import React from 'react'
import '../../styles/CustomPusher.css'
export default class CustomPusher extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      customPusherClass: 'custom-pusher-invisible'
    }
  }

  componentDidUpdate(prevProps){
    if(this.props.visible === true && this.state.customPusherClass !== 'custom-pusher-visible'){
      this.setState({customPusherClass: 'custom-pusher-visible'});
    } else if(prevProps.visible === true && this.props.visible === false){
      this.setState({customPusherClass: 'custom-pusher-invisible'});
    }
  }
  
  render(){
    const {children} = this.props;
    let customPusherClass = this.state.customPusherClass;
    if(this.props.isNavbar) {customPusherClass += ' custom-pusher-invisible-navbar'};
    return (
      <div className={this.state.customPusherClass}>
        {children};
      </div>
    )
  }
}
