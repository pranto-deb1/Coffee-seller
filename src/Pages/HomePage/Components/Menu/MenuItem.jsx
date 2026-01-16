const MenuItem = ({ image, name, description, price }) => {
  return (
    <div className="menu-card bg-white flex items-center gap-4 justify-between p-4 rounded-[10px]">
      <img src={image} alt={name} className="menu-image w-25 h-25 rounded-full" />
      <div className="flex-1 min-w-0">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-description line-clamp-2">{description}</p>
      </div>
      <span className="menu-item-price whitespace-nowrap">{price}</span>
    </div>
  );
};

export default MenuItem;
