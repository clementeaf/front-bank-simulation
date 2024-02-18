export function BlueButton({ action, title }) {
  return (
    <button
      className="px-4 py-2 rounded-2xl bg-blue-600 text-white shadow-lg hover:shadow-sm ease-in-out duration-300"
      onClick={action}
    >
      {title}
    </button>
  );
}
