import React from "react";
import ReactDOM from "react-dom";

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        Hello, world! I am a SWAGGY.
      </div>
    );
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById("app")
);
