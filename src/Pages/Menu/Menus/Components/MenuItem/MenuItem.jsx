const MenuItem = ({ name, price, desc }) => (
  <div className="flex items-center gap-4 p-3 border border-[#F0EBE3] rounded-2xl bg-white/40 group hover:bg-white transition-all">
    {/* Image Placeholder Circle */}
    <div className="w-12 h-12 rounded-full bg-[#5C3D2E] border-2 border-[#5C3D2E] flex-shrink-0 overflow-hidden shadow-inner">
      {/* <img src={image} className="w-full h-full object-cover" /> */}
    </div>
    
    <div className="flex-grow">
      <div className="flex justify-between items-center">
        <h4 className="font-bold text-[#3E2723] text-sm uppercase">{name}</h4>
        <span className="font-bold text-[#3E2723] text-sm">{price}</span>
      </div>
      {desc && <p className="text-[11px] text-[#8D7B68] italic leading-tight mt-1">{desc}</p>}
    </div>
  </div>
);

export default MenuItem;