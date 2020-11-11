import React, { Component } from 'react';
import Widecard from '../components/Widecard';


class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="NDiploma Information Technology" where="WSU University" from="February 2016" to="November 2018"/>
<Widecard title="Pakamani | SSS" where="Pakamani Senior Secondary School" from="2013" to="2015"/>

<h1 className="subtopic">Certification</h1>
<Widecard title="CyberSecurity" where="Online Exam" from="june 2019" to=""/>
<Widecard title="AWS | Cloud Practitioner" where="Online Exam" from="02/03/2020" to="02/03/2023"/>

</div>
)

}
}
export default Education