import React, { Component } from "react";
//import girl from './assets/img/girl.png';
import man from './assets/img/man.png';
import crown from './assets/img/crown.png';
import trophy from './assets/img/trophy.png';
import heart from './assets/img/heart.png';
import tick from './assets/img/tick.png';
import blocked from './assets/img/blocked.png';
import unlocked from './assets/img/unlocked.png';
import user from './assets/img/user.png';
import favorite from './assets/img/favorite.png';
import start from './assets/img/start.png';
import rightArrow from './assets/img/right-arrow.png';
import downArrow from './assets/img/down-arrow.png';

class ToggleBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      arrows: rightArrow, 
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    this.setState(oldState => ({ isOpened: !oldState.isOpened }));
    if (this.state.arrows === rightArrow){
      this.setState({ arrows: downArrow });
    }else{
      this.setState({ arrows: rightArrow });
    }
  }

  render() {
    const { title, children, colsrc } = this.props;
    const { isOpened } = this.state;
    return (
      <div>
        <div onClick={this.toggleBox}>
          <Collapse imgsrc={colsrc} text={title} arrow={this.state.arrows}/>
        </div>
        {isOpened && children && (
          <div className="">
            {children}
          </div>
        )}
      </div>
    );
  }
}
class Collapse extends Component {
  render(){
    var blockStyle = {
      display:'flex',
      backgroundColor: '#f9eeed',
      color: 'black',
      width: 700,
    };

    var imgStyle = {
      height: 30,
      margin: 5,
    };

    var circleStyle = {
      background: '#7b72a9',
      width: 40,
      height: 40,
      borderRadius: 20,
    };
    return(
      <div className="profile-box" style={blockStyle}>
        <div style={{flex:'9', display:'flex'}}>
          <div style={{flex: 1}}><div style={circleStyle}><img alt="icon-profile" style={imgStyle} src={this.props.imgsrc} /></div></div>
          <h4 style={{flex: 6, marginTop: 12}}>{this.props.text}</h4>
        </div>
        <div style={{flex:'1'}}>
          <img alt="arrow" style={imgStyle} src={this.props.arrow} />
        </div>
      </div>
    );
  }
}

class Child extends Component {
  render(){
    var blockStyle = {
      backgroundColor: '#f1f1f1',
      color: 'black',
      width: 685,
      paddingLeft: 15,
    };
    return(
      <div className="profile-box" style={blockStyle}>
        <div>
          <h5>{this.props.text}</h5>
        </div>
      </div>
    );
  }
}

class Box extends Component {
  render(){
    var boxStyle = {
      color: 'gray',
      paddingBottom: 10,
    }
    return(
      <div style={boxStyle}>
        <h2 style={{marginBottom: 10}}>{this.props.header}</h2>
        {this.props.children}
      </div>
    );
  }
}

class Profile extends Component {
  render() {
    var achievementStyle = {
      width: 170,
      display: 'flex',  
      justifyContent: 'space-between', 
      alignItems: 'center',
    };
    return (
      <div className="main-container">
        <div className="sidebar">
            <div className="sidebar-container">
                <h1 style={{paddingBottom: 20}}>Cadbury Carl</h1>
                <img alt="boy" style={{paddingBottom: 20, width: 170}} src={man}/>
                <h3 style={{paddingBottom: 20}}>390.230 Points</h3>
                <div style={achievementStyle}>
                  <img alt="crown" style={{width: 50}} src={crown} />
                  <img alt="trophy" style={{width: 50}} src={trophy} />
                  <img alt="newcomer" style={{width: 50}} src={start} />
                </div>

            </div>
        </div> 

        <div className="main-column">
            <div className="main-col-container">
              <Box header="General">
                <ToggleBox title="Favorites" colsrc={heart}>
                  <Child text="Margareth"/>
                  <Child text="Bornelius"/>
                </ToggleBox>
                <ToggleBox title="Accounts" colsrc={user}>
                  <Child text="Sign Out"/>
                </ToggleBox>
                <ToggleBox title="Achievements" colsrc={favorite}>
                  <Child text="King of the King"/>
                  <Child text="High Achiever"/>
                  <Child text="New Comer"/>
                </ToggleBox>
                <button className="create-button">Create New Class</button>
              </Box>
              <Box header="Settings">
                <ToggleBox title="Edit Login Details" colsrc={unlocked}>
                  <Child text="Name"/>
                  <Child text="Photo"/>
                  <Child text="Email"/>
                  <Child text="Password"/>
                </ToggleBox>
                <ToggleBox title="Blocked Users" colsrc={blocked}>
                  <Child text="Elsie"/>
                </ToggleBox>
              </Box>
              
            </div>
        </div>
      </div>
    );
  }
}
 
export default Profile;