// import UserClass from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>Hiii from Praneeth's Kitchen</h1>
        <h2>We are located in Hyderabad</h2>
        <UserClass  />
      </div>
    );
  }
}

export default About;