import React, { Component } from "react";
import "../Pages/Activity.css";

class ActivitySubscribe extends Component {

    constructor(props){
        super(props);

        this.state = {
            activeInputEmail: "",
            activeInputPwd: "",
            activeInputCheck: false,
            newInputName: "",
            newInputLastame:"",
            newInputEmail:"",
            newInputCheck:""


        }
    }

    activeInputEmail = (event) => {
        this.setState({activeInputEmail: event.target.value})
    }

    activeInputPwd = (event) => {
        this.setState({activeInputPwd: event.target.value})
    }

    activeInputCheck = (event) => {
        this.setState({activeInputCheck: true})
    }

    activeInputEmail = (event) => {
        this.setState({activeInputEmail: true})
    }

    newInputLastame = (event) => {
        this.setState({newInputLastame: true})
    }

    newInputEmail = (event) => {
        this.setState({newInputEmail: true})
    }

    newInputCheck = (event) => {
        this.setState({newInputCheck: true})
    }

    render(){
        return(/*
                <content>
                    <h2>Want to subscribe to this mission?</h2>

                    <div id="activSubsc">
                        <div id="activExistSubsc">
                            <h3 class="activSubscTitle">already a member ?</h3>
                            
                            <form id="activSubscData">

                                <input 
                                    onChange={this.activeInputEmail} 
                                    id="activSEmail" 
                                    type="text" 
                                    placeholder="Email" 
                                    required={true}
                                    value={this.state.activeInputEmail}/>
                                <br />

                                <input 
                                    onChange={this.activeInputPwd}
                                    id="activSPwd" 
                                    type="text" 
                                    placeholder="Password" 
                                    required={true}
                                    value={this.state.activeInputPwd} />
                                <br />

                                <input 
                                    onChange={this.activeInputCheck}
                                    id="activSConf" 
                                    type="checkbox" 
                                    name="conf" 
                                    required={true}
                                    value={this.state.activeInputCheck} />

                                <label for="conf">I confirm I want to participate</label>
                                <br />
                                <button type="submit"> Sign in for this mission!</button>

                            </form>
                        </div>

                        <div id="activNewSubsc">
                            <h3 class="activSubscTitle">New member</h3>
                            <div id="NewSubscrData">
                                <input 
                                    onChange={newInputName}
                                    id="newSubscrFName" 
                                    placeholder="Your First name" 
                                    value={this.state.newInputName}
                                />
                                <input 
                                    onChange={newInputLastame}
                                    id="newSubscrLName" 
                                    placeholder="Your Last name"
                                    value={this.state.newInputLastame}
                                />
                                <input 
                                    onChange={newInputEmail}
                                    id="newSubscrLEmail" 
                                    placeholder="Your Email" 
                                    value={this.state.newInputEmail}
                                />

                                <input 
                                    onChange={newInputCheck}
                                    id="newSubscConf" 
                                    type="checkbox" 
                                    name="conf"
                                    value={this.state.newInputCheck}
                                />
                                
                                <label for="conf">I want to join</label>
                                <button>Join the team!</button>
                            </div>
                        </div>
                    </div>
                </content>
        */
       <>
       </>)
       }
}

export default ActivitySubscribe;