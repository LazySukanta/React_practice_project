import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent component did mount");
  }

  render() {
    return (
      <div>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h1>About Class Component</h1>
        <UserClass name="Sukante" location="Kolkata" />
        <UserClass name="Dinda" location="Indida" />
      </div>
    );
  }
}

export default About;
