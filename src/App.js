import { Provider } from "react-redux";
import Cart from "./components/Cart";
import store from "./redux/store";
function App() {
  return (
    <div class="bg-gray-50 h-full md:h-screen">
      <div class="grid place-items-center">
        <h1 class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
          Shopping Cart
        </h1>
      </div>
      <div>
        {/* <Provider store={store}> */}
        <Cart />
        {/* </Provider> */}
      </div>
    </div>
  );
}

export default App;
