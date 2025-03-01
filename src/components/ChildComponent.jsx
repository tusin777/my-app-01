// import { Component } from "react";

// export class ChildComponent extends Component {
//   render() {
//     const { count, onIncrement } = this.props;
//     return (
//       <div>
//         <p>Еще счетчик: {count}</p>
//         <button onClick={onIncrement}>Прибавить 1</button>
//       </div>
//     );
//   }
// }

export function ChildComponent(props) {
  return (
    <div>
      <p>Еще счетчик: {props.count}</p>
      <button onClick={props.onIncrement}>Прибавить 1</button>
    </div>
  );
}
