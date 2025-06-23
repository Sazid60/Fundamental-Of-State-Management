import { useReducer } from "react";

function App() {
  // const [userInfo, setUserInfo] = useState({
  //   name: "",
  //   email: "",
  //   phone: ""
  // });

  // const handleOnChange = (e) => {
  //   setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  // }

  const initialState = {
    name: "",
    email: "",
    phone: ""

  }

  // what is inside action ? 

  // {
  //   type: "_FIELD_UPDATE";
  //   payload: {
  //     field: "name",
  //       value: "PH"
  //   }
  // }

  const reducer = (state, action) => {
    switch (action.type) {
      case "FIELD_UPDATE":
        return {
          ...state,
          [action.payload.field]: action.payload.value
        };
      case "RESET":
        return initialState

      case "CLEAR":
        return {
          ...state,
          [action.payload.field]: ""
        };

      default:
        return state;
    }
  }


  // takes gives userInfo and dispatch (not a saved function)
  // takes reducer function and initial arguments 
  const [userInfo, dispatch] = useReducer(reducer, initialState)

  console.log(userInfo)

  // to send the action to the reducer we need the help of dispatch. 
  // when we dispatch anything the thing goes to action 
  const handleOnChange = (e) => {
    dispatch({
      type: "FIELD_UPDATE",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  }

  const handleClear = (field) => {
    dispatch({
      type: "CLEAR",
      payload: {
        field: field,
      },
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label><br />
          <input
            type="text"
            name="name"
            id="name"
            value={userInfo.name}
            onChange={handleOnChange}
          />
          <button onClick={() => handleClear("name")}>Clear</button>
        </div>
        <div>
          <label htmlFor="email">Email</label><br />
          <input
            type="email"
            name="email"
            id="email"
            value={userInfo.email}
            onChange={handleOnChange}
          />
          <button onClick={() => handleClear("name")}>Clear</button>
        </div>
        <div>
          <label htmlFor="phone">Phone</label><br />
          <input
            type="tel"
            name="phone"
            id="phone"
            value={userInfo.phone}
            onChange={handleOnChange}
          />
          <button onClick={() => handleClear("name")}>Clear</button>
        </div>
        <div>
          <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;

