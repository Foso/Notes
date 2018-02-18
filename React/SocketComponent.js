import React from "react";
import Socket from "simple-websocket";

class SocketComponent extends React.Component{
    constructor(props) {
        super(props);
       
        this.socket =   new Socket({
            url: "ws://192.168.178.22:8765"
           
        });


        this.socket.on('connect', function () {
            console.log("connected")
          });
           
          this.socket.on('data', function (data) {
            console.log('got message: ' + data)
          });
      }
            
       sendMessage(message){
       // this.state.socket.sendMessage(message);
      }
    

    render(){
        return (
            <div className="container">
                <aside>
          <h2>Installed Apps</h2>
        
        
        </aside>
       
        <button onClick={() => this.sendMessage("Hello")} >Send Message</button>
   
            </div>
        );
    }
}

export default SocketComponent;
