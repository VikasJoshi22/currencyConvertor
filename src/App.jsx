import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amt, setAmt] = useState(0);
  const [to, setTo] = useState("INR");
  const [from, setFrom] = useState("USD");
  const [result, setResult] = useState(0);
  const currencyInfo = useCurrencyInfo(to, from);

  const convert = ()=>{
    setResult(currencyInfo * amt);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center w-[100vw]">
      <div className="flex justify-center w-full text-5xl font-bold text-white mt-[10vh]">Currency Convertor</div>
        <form
          className="flex flex-col items-center mt-10 rounded-lg p-5 bg-gray-700"
          onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}
        >
          <InputBox
            label="From"
            onAmountChange={(num) => {
              setAmt(num);
            }}
            onCurrencyChange={(s) => {
              setFrom(s);
            }}
            amount={amt}
            selectedCurrency={from}
            defaultCurrency={'USD'}
          />
          <InputBox
            label="To"
            amountDisabled={true}
            onCurrencyChange={(s) => {
              setTo(s);
            }}
            selectedCurrency={to}
            amount={result}
          />
          <input
            type="submit"
            value="Convert"
            className="bg-blue-600 h-10 w-1/2 text-white font-bold text-lg rounded-md"
          />
        </form>
      </div>
    </>
  );
}

export default App;
