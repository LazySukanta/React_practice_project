import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child Constructor");
    super(props);
    this.state = {
      count: 0,
      count2: 100,
      count3: 10000,
    };
  }

  async  componentDidMount() {
    // console.log("Child component did mount");

  }

  render() {
    console.log("Child Render");
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h2>Name :{name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: dindasukanta19@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
 