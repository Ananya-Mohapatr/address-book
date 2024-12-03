import { Provider } from 'react-redux';
import './App.css';
import AddressList from './Component/AddressList'
import listReducer from './utils/store'
function App() {
  return (
    <Provider store = {listReducer}>
      <AddressList/>
    </Provider>
  );
}

export default App;
