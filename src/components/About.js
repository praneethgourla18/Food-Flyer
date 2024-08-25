// import UserClass from "./User";
import UserClass from "./UserClass"
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
      <div className="mt-[130px]">
        <UserClass  />
      </div>
    );
  }
}

export default About;