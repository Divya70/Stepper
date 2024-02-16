import "./App.css";
import Stepper from "./components/Stepper";
 const CHECKOUT_STEP =[
{
  name:"Customer Info",
  component:()=> <div>Provide your Contact Details</div>
},
{
  name:"Shipping Info",
  component:()=><div>Enter your shipping details here</div>
},
{
  name:"Payment",
  component:()=><div>Complete your payment for your order </div>
},
{
  name:"Delivered",
  component:()=><div>Your order has been delivered</div>
}
]
function App() {
  return (
    <>
      <div>
        <h2>Checkout</h2>
        <Stepper stepsConfig={CHECKOUT_STEP}/>
      </div>
    </>
  );
}

export default App;
