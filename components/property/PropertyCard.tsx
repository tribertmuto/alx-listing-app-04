
export default function PropertyCard({ property }) {
  return (
    <div className="border p-2">
      <h3>{property.name}</h3>
      <p>{property.location}</p>
    </div>
  );
}
