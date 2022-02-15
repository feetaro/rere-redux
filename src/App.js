import "./styles.css";

import { connect, useDispatch, useSelector } from "react-redux";
import { signInAction } from "./reducers/users/actions";

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  console.log(selector.users);

  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch(signInAction({ uid: "aaaa", username: "hoge" }))
        }
      >
        aaaaaa
      </button>
    </div>
  );
}

//const mapStateToProps = (state) => ({ state });

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
