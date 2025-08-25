
export default function PropertyDetail({ property }) {
  return (
    <div>
      <h1>{property.name}</h1>
      <p>{property.description}</p>
    </div>
  );
}
