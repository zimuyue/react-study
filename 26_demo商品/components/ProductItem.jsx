import { Link } from 'react-router-dom';

function ProductItem ({ data }) {
  return (
    <div>
      <Link to={ '/detail/' + data.id }>
        <img src={ data.image } style={{ width: 100 }} />
      </Link>
      <div>
        <h1>{ data.name }</h1>
        <p>{ data.price }</p>
      </div>
      <hr />
    </div>
  )
}

export default ProductItem;