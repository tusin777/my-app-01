import { Component } from "react";
import { ChildComponent } from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: [0, 0, 0],
    };
  }

  increment = (index) => {
    this.setState((prevState) => {
      const newCounts = [...prevState.counts];
      newCounts[index] += 1;
      return { counts: newCounts };
    });
  };

  render() {
    return (
      <div>
        {this.state.counts.map((count, index) => (
          <ChildComponent
            key={index}
            count={count}
            onIncrement={() => this.increment(index)}
          />
        ))}
      </div>
    );
  }
}

export default ParentComponent;
