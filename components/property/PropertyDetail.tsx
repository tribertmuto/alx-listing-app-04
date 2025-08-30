export default function PropertyDetail({ property }: { property: any }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="mt-2">{property.description}</p>
      <p className="mt-2 text-blue-600 font-semibold">${property.price}/night</p>
    </div>
  );
}
