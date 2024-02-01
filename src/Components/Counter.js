// import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       message: '',
//     };
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component updated:', prevState.count, '->', this.state.count);

//     if (this.state.count === 10 && prevState.count !== 10) {
//       this.setState({ message: 'Congratulations, you won!' });
//     }
//   }

//   handleIncrement = () => {
//     if (this.state.count < 10) {
//       this.setState((prevState) => ({
//         count: prevState.count + 1,
//       }));
//     }
//   };

//   componentDidMount() {
//     console.log('Component is mounted!');
//   }

//   render() {
//     return (
//       <div>
//         <h1>Counter: {this.state.count}</h1>
//         <button onClick={this.handleIncrement} disabled={this.state.count >= 10}>
//           Increment
//         </button>
//         {this.state.message && <p>{this.state.message}</p>}
//       </div>
//     );
//   }
// }

// export default Counter;


// import React, { Component } from 'react';
// import ErrorBoundary from './ErrorBoundary';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   handleIncrement = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };

//   handleDecrement = () => {
//     // this.setState((prevState) => ({ count: prevState.count - 1 }));
//     this.setState((prevState) => ({ count: prevState.nonExistentVariable - 1 }));

//   };

//   render() {
//     return (
//       <div>
//         <ErrorBoundary>
//         <h1>Counter</h1>
//           <div>
//             <button onClick={this.handleIncrement}>Increment</button>
//             <button onClick={this.handleDecrement}>Decrement</button>
//             <p>Count: {this.state.count}</p>
//           </div>
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

// export default Counter;



// Counter.js
import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecrement = () => {
    try {
      this.setState((prevState) => ({ count: prevState.nonExistentVariable - 1 }));
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <ErrorBoundary>
          <h1>Counter</h1>
          <div>
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
            <p>Count: {this.state.count}</p>
            <p>{this.error}</p>
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}

export default Counter;
