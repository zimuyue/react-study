function ListItem ({ data }) {
  return (
    <div>
      <img src={ data.image } style={{ width: 150 }} />
      <h1>{ data.name }</h1>
      <p>{ data.price }</p>
    </div>
  );
}

export default ListItem;