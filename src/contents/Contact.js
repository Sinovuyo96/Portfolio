import React, { Component } from 'react';
import Social from '../components/Social';
import { useMediaQuery } from 'react-responsive'


class Contact extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">Contact Me</h1>
<div className ="details">
    <h3>Email       :   sinovuyosolani96@gmail.com</h3>
    <h3>Instagram   :   @official_Solani</h3>
    <h3>Twitter     :   @Sinovuyo Solani</h3>
    <h3>LinkedIn    :   @Sinovuyo Solani</h3>
    <h3>Facebook    :   @Vuyo Solani</h3>
</div>

<Social />
</div>
)
}
}
export default Contact