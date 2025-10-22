export default function Button({ variant = "primary", children, ...props }) {
  const base =
    "px-4 py-2 rounded-md font-medium focus:outline-none transition";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  return <button className={`${base} ${variants[variant]}`} {...props}>{children}</button>;
}
