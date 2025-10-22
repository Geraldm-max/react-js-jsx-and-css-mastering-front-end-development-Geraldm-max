export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 mb-4">
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      {children}
    </div>
  );
}
