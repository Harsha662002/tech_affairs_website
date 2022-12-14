import style from "./events.module.css";
import Marquee from "react-fast-marquee";
import React, { Component } from "react";
export class Events extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };
  constructor() {
    super();
    this.state = {
      _id: "123",
      message: "Welcome to Technical Affairs IIITDM !!!",
      description: "frhgdfhg",
      hyperlink: "sdhgfjhds",
      __v: 0,
      loading: false,
    };
  }
  // async Updatealert() {
  //   const url = `https://techaffairs-backend.herokuapp.com/alerts`;
  //   this.setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({
  //     _id: parsedData._id,
  //     message: parsedData.message,
  //     description: parsedData.description,
  //     hyperlink: parsedData.hyperlink,
  //     __v: parsedData.__v,
  //     loading: false,
  //   });
  // }
  // async componentDidMount() {
  //   this.Updatealert();
  // }
  render() {
    return (
      <>
        <Marquee
          behavior="scroll"
          direction="left"
          speed="50"
          pauseOnClick="true"
          className={style.scrl}
        >
          {this.state.message}
        </Marquee>
      </>
    );
  }
}
export function createNews() {
  return new Events();
}
export default Events;
