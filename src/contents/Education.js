import React, { Component } from 'react';
import Widecard from '../components/Widecard';


class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="Pakamani | SSS" where="Pakamani Senior Secondary School" from="2013" to="2015"/>
<Widecard title="National Diploma: Information Technology" where="Walter Sisulu University University" from="February 2016" to="November 2018"/>


<h1 className="subtopic">Certification</h1>

<Widecard title="AWS | Cloud Practitioner" where="Online Exam" from="02/03/2020" to="02/03/2023"/>
<Widecard title="AWS | Solutions Architecture Associate " where="Online Exam" from="23/11/2020" to="23/11/2023"/>
<Widecard title="CyberSecurity" where="Online Exam" from="june 2019" to=""/>
</div>
)

}
}
export default Education