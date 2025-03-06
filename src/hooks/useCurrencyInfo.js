import { useEffect, useState } from "react";

function useCurrencyInfo(currency, baseCurrency){
    const [info, setInfo] = useState(0);
    useEffect(()=>{
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_3KdDPAdt813YGk8a18HNR7ciCt6sgWGLpTVRlSoH&currencies=${currency}&base_currency=${baseCurrency}`)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>(setInfo(res.data[currency].value)));
    }, [currency, baseCurrency])
    return info;
}

export default useCurrencyInfo;