// import React, { useReducer } from 'react';

// const actionTypes = {
//   CHANGE_COLOR: 'CHANGE_COLOR',
// };

// const colorReducer = (state, action) => {
//   switch (action.type) {
//     case actionTypes.CHANGE_COLOR:
//       return { ...state, color: action.payload };
//     default:
//       return state;
//   }
// };

// const initialState = {
//   color: 'black',
// };

// const ColorChanger = () => {
//   const [state, dispatch] = useReducer(colorReducer, initialState);

//   const handleButtonClick = (color) => {dispatch({ type: actionTypes.CHANGE_COLOR, payload: color })};

//   return (
//     <div>
//       <div
//         style={{
//           width: '200px',
//           height: '200px',
//           backgroundColor: state.color,
//           margin: '20px',
//         }}
//       ></div>
//       <button onClick={() => handleButtonClick('red')}>Red</button>
//       <button onClick={() => handleButtonClick('blue')}>Blue</button>
//       <button onClick={() => handleButtonClick('green')}>Green</button>
//       <button onClick={() => handleButtonClick('yellow')}>Yellow</button>
//       <button onClick={() => handleButtonClick('purple')}>Purple</button>
//     </div>
//   );
// };

// export default ColorChanger;


import React, { useReducer } from 'react';

const colorReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { color: action.payload };
    default:
      return state;
  }
};

const ColorChanger = () => {
  const [state, dispatch] = useReducer(colorReducer, { color: 'black' });

  const handleButtonClick = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: state.color,
          margin: '20px',
        }}
      ></div>
      {['red', 'blue', 'green', 'yellow', 'purple'].map((color) => (
        <button key={color} onClick={() => handleButtonClick(color)}>
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorChanger;
