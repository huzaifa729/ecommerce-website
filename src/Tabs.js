import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import _ from "underscore";

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isSelected(tab) {
    return tab.props.value === this.state.value;
  }

  selectTab(e, value) {
    this.setState({ value });
    this.props.onChange(e, value);
  }

  getHeader(tabs) {
    return tabs.map((tab, i) => {
      const style = this.isSelected(tab)
        ? activeTabHeaderStyle
        : tabHeaderStyle;

      return (
        <span
          key={tab.props.value}
          onClick={e => this.selectTab(e, tab.props.value)}
          style={i === 0 ? style : Object.assign({}, style, sideHeaderStyle)}
        >
          {tab.props.header}
        </span>
      );
    });
  }

  render() {
    const { children } = this.props;
    const tabs = Children.toArray(children);

    return (
      <div style={tabsStyle}>
        <div style={tabsHeaderStyle}>{this.getHeader(tabs)}</div>
        <div style={tabsContentStyle}>
          {_.find(tabs, tab => this.isSelected(tab))}
        </div>
      </div>
    );
  }
}

Tabs.defaultProps = {
  onChange: _.noop
};

Tabs.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func
};

// Style
// const borderStyle = "1px solid rgba(0,0,0,0.15)";
const tabsStyle = {
  // boxShadow: "0 10px 40px -20px rgba(0,0,0,0.35)",
  // border: borderStyle,
  // borderRadius: "8px"
  color: "white",
  justifyContent: "space-between",
  padding: "60px",
  fontfamily: "Arial, Helvetica, sans-serif",
  fontSize:"30px",
  // border:"5px solid red",
  border:"2px solid red",
  width:"1000px",
  height:"50px",
  marginTop:"50px"
};

const tabsHeaderStyle = {
   display: "flex",
  // justifyContent: "space-around",
  // backgroundColor: "#f7f7f7",
  // borderRadius: "8px 8px 0 0",
  // overflow: "hidden",
  padding: "0px",
  // textAlign: "center",
  marginLeft:"310px",

 
};

const tabHeaderStyle = {
  // flex: "1",
  // padding: "50px",
  textAlign: "center",
  cursor: "pointer",
  // borderBottom: borderStyle
  marginLeft:"150px",

};

const activeTabHeaderStyle = Object.assign({}, tabHeaderStyle, {
  // backgroundColor: "#fff",
  // borderBottom: "none",
  cursor: "auto",
  color: "white",
  textDecoration:"underline",
});

 const sideHeaderStyle = {  };

const tabsContentStyle = {
  padding: "10px",
  borderTop: "none",
  borderRadius: "0 0 8px 8px"
};
