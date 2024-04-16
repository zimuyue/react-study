export default function () {
  const [ count, setCount ] = React.useState(0);
  const [ info, setInfo ] = React.useState({
    name: 'ming'
  })
  const [ arrList, setArrList ] = React.useState([1, 2, 3]);
  
  return (
    <div>
      <h1>{ count }</h1>
      <button onClick={ () => setCount(1) }>SET COUNT 1</button>
      <button onClick={ () => setCount((count) => count + 1) }>SET COUNT ADD</button>
      <br />
      <h1>{ info.name }</h1>
      <button onClick={ () => setInfo((info) => ({ name: 'mingming' })) }>SET INFO</button>
      <br />
      <h1>{ arrList }</h1>
      <button onClick={ () => setArrList((arr) => ([ ...arr, 4 ])) }>SET ARRLIST</button>
    </div>
  )
}
