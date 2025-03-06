import React from 'react'
import { useId } from 'react'

function InputBox({
    label = "From",
    classname = "",
    amount,
    onAmountChange,
    currencyOptions = [
        "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
        "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
        "BSD", "BTN", "BWP", "BYN", "BYR", "BZD", "CAD", "CDF", "CHF", "CLF",
        "CLP", "CNY", "COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK",
        "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL",
        "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK",
        "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP",
        "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD",
        "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTL", "LVL", "LYD",
        "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MUR", "MVR",
        "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD",
        "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON",
        "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP",
        "SLL", "SOS", "SRD", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT",
        "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU",
        "UZS", "VEF", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XCD", "XDR",
        "XOF", "XPF", "YER", "ZAR", "ZMK", "ZMW", "ZWL", "XPT", "XPD", "BTC",
        "ETH", "BNB", "XRP", "SOL", "DOT", "AVAX", "MATIC", "LTC", "ADA"
      ],
    selectedCurrency = 'USD',
    onCurrencyChange,
    amountDisabled = false,
    currencyDisabled = false,
}) {
    const amountInputId = useId()
  return (
    <>
    <div className={`flex justify-center items-center min-w-sm p-3 bg-white m-2 rounded-md ${classname}` }>
        <div className='flex flex-col w-[50%]'>
            <label htmlFor={amountInputId} className='text-gray-500 text-sm'>{label}</label>

            <input
            type="number"
            id={amountInputId}
            value={amount} 
            className='bg-gray-300 rounded-sm px-2 py-1 mt-3' 
            disabled={amountDisabled} 
            onChange={(e)=>(onAmountChange && onAmountChange(Number(e.target.value)))}
            />

        </div>

        <div className='flex flex-col w-[50%] items-end'>
            <label className='text-gray-500 text-sm'>Currency Type</label>

            <select 
            className='bg-gray-300 rounded-sm px-2 py-1 mt-3' 
            disabled={currencyDisabled}
            value={selectedCurrency}
            onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
            >
                {currencyOptions.map((currency, index)=>(<option value={currency} key={index}>{currency}</option>))}
            </select>

        </div>
    </div>
    </>
  )
}

export default InputBox