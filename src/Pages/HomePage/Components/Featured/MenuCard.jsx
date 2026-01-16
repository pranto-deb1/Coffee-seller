const MenuCard = ({ image, label, className = "" }) => {
  return (
    <div className={`menu-card group cursor-pointer ${className}`}>
      <div className="w-full h-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={label}
          className="w-full bg-white h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <span className="menu-card-label">{label}</span>
    </div>
  );
};

export default MenuCard;
