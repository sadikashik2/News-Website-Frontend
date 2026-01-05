export default function LoadingCard() {
  return (
    <div className="border rounded shadow p-4 animate-pulse">
      <div className="bg-gray-300 w-full h-48 mb-3"></div>
      <div className="h-4 bg-gray-300 mb-2 rounded"></div>
      <div className="h-3 bg-gray-300 mb-2 rounded"></div>
      <div className="flex justify-between">
        <div className="h-3 w-16 bg-gray-300 rounded"></div>
        <div className="h-3 w-16 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
