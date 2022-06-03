import React, {Component} from "react";

export default class LogOutBtn extends Component{
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        localStorage.clear();
        window.location = '/'
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-outline-info" onClick={this.logout}>LogOut</button>
            </div>
        );
    }
}