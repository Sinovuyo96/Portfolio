import React, { Component } from 'react';
import Navitem from './Navitem';
import { useMediaQuery } from 'react-responsive'



class Navbar extends Component {
constructor(props)
{
super(props);
this.state={
NavItemActive:"Home"

}


}
activeitem=()=>
{
if(this.state.NavItemActive.length>0){
document.getElementById(this.state.NavItemActive).classList.remove('active');
}
this.setState({'NavItemId':'item'},()=>{
document.getElementById(this.state.NavItemActive).classList.add('active');
});

};



render() {
return (
<nav>
<ul >
<Navitem  item="Home" tolink="/"  activec={this.activeitem}></Navitem>
<Navitem item="About" tolink="/About"  activec={this.activeitem}></Navitem>
<Navitem item="Education" tolink="/Education"  activec={this.activeitem}></Navitem>
<Navitem item="Skills" tolink="/Skills"  activec={this.activeitem}></Navitem>
<Navitem item="Contact" tolink="/Contact"  activec={this.activeitem}></Navitem>
</ul>
</nav>
)
}
}
export default Navbar