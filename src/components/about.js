import UserClass from "./UserClass";
import User from './User';
import { Component } from "react";
import contextData from './UseContext';

// const AboutPage = () => {
//     const infoobjjsbased={
//         componenttype:'js based',
//         name:'Megha',
//         location:'Hyderabad',
//         email:'megha@gmail.com'
//     };
//      const infoobjclassbased={
//         componenttype:'class based',
//         name:'Megha',
//         location:'Hyderabad',
//         email:'megha@gmail.com'
//     }
    
//     return (
        
//         <div className="container">
//             <h1>This is about page</h1>
//             <User  infoobj={infoobjjsbased}/>
//             <UserClass infoobj1={infoobjclassbased} />
//         </div>

//     )
// }


class AboutPage extends Component{
    constructor(props){
    super(props);
    console.log('Parent constructor called')
         this.infoobjjsbased={
        componenttype:'js based',
        name:'Megha',
        location:'Hyderabad',
        email:'megha@gmail.com'
    };
      this.infoobjclassbased={
        componenttype:'class based',
        name:'Megha',
        location:'Hyderabad',
        email:'megha@gmail.com'
    }
}

componentDidMount(){
    console.log('parent componentDidMount called');
}
    render(){
          console.log('parent rendered');
        return(
          
            <div className="container">
             <h1>This is about page</h1>
             <User  infoobj={this.infoobjjsbased}/>
             <UserClass infoobj1={this.infoobjclassbased} name={'first'} />
              <UserClass infoobj1={this.infoobjclassbased} name={'second'}/>
              <contextData.Consumer>
{({ loggedinUser})=><h1>{loggedinUser}</h1>}
              </contextData.Consumer>
       </div>
        )
    }
}
export default AboutPage