import React, { Component } from 'react'
import { useMediaQuery } from 'react-responsive'

class Skills extends Component {
    
constructor(props)
{
super(props);
this.state={
'myskills':['HTML','CSS','JS','REACT JS','AWS Amplify',"AWS Cloudformation", "Amazon s3","AWS Cloudfront", "AWS Route 53", "DynamoDB"]
};
}
render() {
 return (
<div className="condiv skills">

<h1 className="subtopic">My Skills</h1>
<ul className="myskills">
{this.state.myskills.map((value)=>{
return <li>{value}</li>
})}
</ul>
</div>
)
}
}
export default Skills