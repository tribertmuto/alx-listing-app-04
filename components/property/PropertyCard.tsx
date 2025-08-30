export default function PropertyCard({ property }: { property: any }) {
  return (
    <div className="border rounded-lg p-4 shadow">
      <img
        src={property.image || "/images/default.jpg"}
        alt={property.title}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{property.title}</h2>
      <p>{property.location}</p>
      <p className="text-blue-600 font-semibold">${property.price}/night</p>
    </div>
  );
}
