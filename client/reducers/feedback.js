import { handleActions } from 'redux-actions';

const initialState = {
  smiles: 345,
  frowns: 23,
  voted: false, // If voted
  votedOn: 0, // Which option has voted
  submitted: false,
};

export default handleActions({
  'add smile': (state) => Object.assign({}, state, {
    smiles: state.smiles + 1,
    voted: true,
    votedOn: 1,
  }),
  'add frown': (state) => Object.assign({}, state, {
    frowns: state.frowns + 1,
    voted: true,
    votedOn: 2,
  }),
  'submit feedback': (state) => Object.assign({}, state, { submitted: true }),

  // 'add todo' (state, action) {
  //   return [{
  //     id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
  //     completed: false,
  //     text: action.payload
  //   }, ...state]
  // },
  //
  // 'delete todo' (state, action) {
  //   return state.filter(todo => todo.id !== action.payload )
  // },
  //
  // 'edit todo' (state, action) {
  //   return state.map(todo => {
  //     return todo.id === action.payload.id
  //       ? { ...todo, text: action.payload.text }
  //       : todo
  //   })
  // },
  //
  // 'complete todo' (state, action) {
  //   return state.map(todo => {
  //     return todo.id === action.payload
  //       ? { ...todo, completed: !todo.completed }
  //       : todo
  //   })
  // },
  //
  // 'complete all' (state, action) {
  //   const areAllMarked = state.every(todo => todo.completed)
  //   return state.map(todo => {
  //     return {
  //       ...todo,
  //       completed: !areAllMarked
  //     }
  //   })
  // },
  //
  // 'clear complete' (state, action) {
  //   return state.filter(todo => todo.completed === false)
  // }
}, initialState);
