export const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold  hover:text-indigo-600 transition-all cursor-mover"
    >
      {label}
    </button>
  );
};
