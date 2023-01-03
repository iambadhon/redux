import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiply4x,
  division5x,
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="reduxMain">
      <div className="reduxBtn">
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(multiply4x())}>4x</button>
        <button onClick={() => dispatch(division5x())}>/5</button>
      </div>
    </div>
  );
}

export default App;
