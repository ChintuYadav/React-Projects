import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      commandHistory:[],
      value:'',
      answer:'',

    }
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }
  componentDidMount(){
      this.nameInput.focus();
  }
  handleChange(e) {
      this.setState({
        value: e.target.value
      });
  }

  keyPress(e){
    if(e.keyCode === 13){
        var inputelement=e.target.value;
        if(inputelement[0]=='s' && inputelement[1]=='i' && inputelement[2]=='n' && inputelement[3]=='(' && inputelement[inputelement.length-1]==')'){
          var result = inputelement.match(/\((.*)\)/);
          result=result[1];
          result=eval(result);
          result=Math.sin(result/180*Math.PI);
          inputelement=result;
          try{
            var answer=eval(inputelement);
          }
          catch(e){
            answer=inputelement+": Command not found"
          }
        }
        else if(inputelement[0]=='c' && inputelement[1]=='o' && inputelement[2]=='s'){
          var result = inputelement.match(/\((.*)\)/);
          result=result[1];
          result=eval(result);
          result=Math.cos(result/180*Math.PI);
          inputelement=result;
          try{
            var answer=eval(inputelement);
          }
          catch(e){
            answer=inputelement+": Command not found"
          }
        }
        else if(inputelement==="help"){
          answer=`\nWelcome to Command line console, This is built using ReactJS,\nfor more information about https://reactjs.org.\n\nJust type the expression for which you want to evalute Example: 10+20*76, you can even give the trigonometric functions like sin(30), cos(30), etc. \nHere is the list of vaid commands.\n\n1. sin(--value--)\n2. cos(--value--)\n3. 1+89*6/3\n4. help\n5. about me\n\n`;
        }
        else if(inputelement==="about me"){
          answer=`\nHello there...\nMy name is Chintu Yadav Sara from AndhraPradesh, India. I love frontend development. Started learning ReactJS a few days back.\nFor more information see the links below.\n https://chintuyadav.github.io\n https://codepen.io/chintuyadav\n\n`;

        }
        else if(inputelement==="clear"){
          console.log('clear');
          var myNode = document.getElementById("terminalOutput");
            while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
            }
            answer="";
        }
        else{
          try{
            var answer=eval(inputelement);
          }
          catch(e){
            answer=inputelement+": Command not found"
          }
        }

        var newArray = this.state.commandHistory;
        newArray.push(e.target.value);
        //console.log(newArray);
        this.setState({
          commandHistory:newArray,
          value:''
        });

        var terminalOutput=document.getElementById('terminalOutput');
        var element = document.createElement("div");
        element.appendChild(document.createTextNode('>>> '+e.target.value));
        var breakStatement= document.createElement("br");
        element.appendChild(breakStatement);

        console.log(answer);
        var answer_node=document.createTextNode( answer );
        answer_node.id="answer-node";
        element.appendChild(answer_node);
        terminalOutput.append(element);
    }
  }
  render() {
    return (



        <div className="Terminal">

          <div className="controls">
            <span className="red"></span><span className="yellow"></span><span className="green"></span><span>root@user:~ </span>
          </div>


          <div className="input-output">
          <div className="Terminal-machine">
            <div className="Input-Terminal">
              <span className="machine-name">root@user:~$ calc<br/>
              &nbsp;Type "help", "sin(10)", "(12+34)*76" for more information</span>
              <div id="terminalOutput"></div>&nbsp;>>> <input autofocus="" ref={(input) => { this.nameInput = input; }} value={this.state.value} onKeyDown={this.keyPress} onChange={this.handleChange}  id="terminalInput" ></input>
            </div>
          </div>
          </div>
        </div>



    );
  }

}


export default App;
