import react, {useState, useEffect} from 'react'
import axios from "axios";



import './index.css'

function App() {
    const currencies = [
        { text: 'US Dollar', value: 'USD' },
        { text: 'Euro', value: 'EUR' },
        { text: 'British Pound', value: 'GBP' },
        { text: 'Canadian Dollar', value: 'CAD' },
        { text: 'Australian Dollar', value: 'AUD' },
        { text: 'Japanese Yen', value: 'JPY' },
        { text: 'Swiss Franc', value: 'CHF' },
        { text: 'Singapore Dollar', value: 'SGD' },
        { text: 'Taiwan New Dollar', value: 'TWD' }
    ]

    const [amount, setAmount] = useState('0')
    const [from, setFrom] = useState('EUR')
    const [to, setTo] = useState('USD')
    const [result, setResult] = useState('')
    const [button, setButton] = useState(true)

    const url = `https://v6.exchangerate-api.com/v6/293978cb175f8729dc8f9799/pair/${from}/${to}/${amount}`

    useEffect(() => {
        axios.get(url).then((response) => {
            setResult(response.data.conversion_result)
        }).catch((error) => {
            console.log(error)
        })
    }, [button])

    useEffect(() => {
        axios.get(url).then((response) => {
            setResult(response.data.conversion_result)
        }).catch((error) => {
            console.log(error)
        })
    }, [to])

    useEffect(() => {
        axios.get(url).then((response) => {
            setResult(response.data.conversion_result)
        }).catch((error) => {
            console.log(error)
        })
    }, [from])

    function search(){
        setButton(!button)
    }

  return (
    <div className="App">
      <div className='main'>
        <div className='container'>
            <div className="input">
                <div className="amount">
                   <label>Amount</label>
                   <form>
                       <input type='text' placeholder={from} onChange={(e) => setAmount(e.target.value)}/>
                   </form>
                </div>
                <div className="from">
                   <label>From</label>
                   <form>
                           <select
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}>
                               {currencies.map(item => {
                                   return (<option key={item.value} value={item.value}>{item.text}</option>);
                               })}
                           </select>
                    </form>
                </div>
                <div className="to">
                    <label>To</label>
                    <form>
                           <select
                               value={to}
                               onChange={(e) => setTo(e.target.value)}>
                               {currencies.map(item => {
                                   return (<option key={item.value} value={item.value}>{item.text}</option>);
                               })}
                           </select>
                   </form>
                </div>
            </div>
            <div className="button">
                <button onClick={search}>Exchange</button>
            </div>
            <div className="result">
                <h1>{result} {to}</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
