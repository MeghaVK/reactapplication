import React from 'react';
class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
        this.state={
            count:0
        }
        console.log('Child constructor called');
        
        this.state={
            title:'test',
            completed:'false'
        }
    }
   async  componentDidMount(){
    console.log('Child componentDidMount called');
    console.log(this.props.name);
    const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';
    const data = await fetch(API_URL);
    const response = await data.json();
    console.log(response);
    this.setState({
        title:response.title,
        completed:response.completed
    })
}
componentDidUpdate(prevProps,prevState){
    console.log('component did update');
    if(this.state.title!== prevState.title){
        
    }

}
componentWillUnmount(){
   console.log('componentWillUnmount') 
}
    render(){
        console.log('child rendered');
        const{title,completed}=this.state;
 return  <div className="container">
            <div className="row">
                <div className="user-card card">
                    <h1>Count : {this.state.count}</h1>
                    <button onClick={()=> this.setState({
                        count:this.state.count+1})}>Increase Count</button>
                    <h1>{this.props.infoobj1.componenttype}</h1>
                    <h1>{this.props.infoobj1.name}</h1>
                    <h3>Title : {title}</h3>
                    <h4>Completed : {completed}</h4>
                </div>
            </div>
        </div>
    }
}
export default UserClass;