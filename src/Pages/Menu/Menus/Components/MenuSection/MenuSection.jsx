import MenuItem from "../MenuItem/MenuItem";
import { motion } from "framer-motion";

const MenuSection = () => {
  // কার্ডের জন্য অ্যানিমেশন ভেরিয়েন্ট
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#FAF7F2] p-8 min-h-screen pt-16">
      <div className="max-w-[1200px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl italic text-chokolet mb-6 md:mb-8 text-center"
        >
          Sip, Savor, Indulge in <br /> Flavorful Delights!
        </motion.h2>

        {/* 8 Columns and 8 Rows Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-8 grid-rows-none md:grid-rows-8 gap-6 h-auto">
          {/* Coffee Menu: (Col 1-3, Row 1-5) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-3 md:row-span-5 bg-[#FDFBF7] border border-[#E6E0D5] rounded-[2.5rem] p-6 shadow-sm"
          >
            <h3 className="font-serif text-2xl text-[#8B5E3C] mb-6 font-bold text-center">
              Coffee Menu
            </h3>
            <div className="space-y-4">
              <MenuItem
                name="Espresso"
                price="$3.00"
                desc="A shot of pure, intense flavor."
              />
              <MenuItem
                name="Cappuccino"
                price="$5.00"
                desc="Perfectly balanced espresso."
              />
              <MenuItem
                name="Iced Latte"
                price="$7.00"
                desc="Smooth with velvety milk."
              />
              <MenuItem
                name="Iced Coffee"
                price="$8.00"
                desc="Intense and refreshing."
              />
              <MenuItem
                name="Latte"
                price="$7.00"
                desc="Classic smooth coffee."
              />
            </div>
          </motion.div>

          {/* Bakery Menu: (Col 4-6, Row 1-3) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-3 md:row-span-3 bg-[#FDFBF7] border border-[#E6E0D5] rounded-[2.5rem] p-6 shadow-sm"
          >
            <h3 className="font-serif text-2xl text-[#8B5E3C] mb-4 font-bold">
              Bakery Menu
            </h3>
            <div className="space-y-4">
              <MenuItem
                name="Croissant"
                price="$6.00"
                desc="Freshly baked goodness."
              />
              <MenuItem
                name="Panini"
                price="$10.00"
                desc="Intense flavor melt."
              />
              <MenuItem
                name="Avocado Toast"
                price="$5.00"
                desc="Healthy and delicious."
              />
            </div>
          </motion.div>

          {/* Chocolate Menu Top: (Col 7-8, Row 1-4) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-4 bg-[#FDFBF7] border border-[#E6E0D5] rounded-[2.5rem] p-6 shadow-sm"
          >
            <h3 className="font-serif text-xl text-[#8B5E3C] mb-4 font-bold">
              Chocolate Menu
            </h3>
            <div className="space-y-4">
              <MenuItem name="Mexican Hot Choc" price="$3.00" />
              <MenuItem name="Café Mocha" price="$5.00" />
              <MenuItem name="Dark Choc Mocha" price="$7.00" />
              <MenuItem name="Avocado Toast" price="$5.00" />
            </div>
          </motion.div>

          {/* Sweets Menu Middle: (Col 4-6, Row 4-7) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-3 md:row-span-5 bg-[#FDFBF7] border border-[#E6E0D5] rounded-[2.5rem] p-6 shadow-sm"
          >
            <h3 className="font-serif text-2xl text-[#8B5E3C] mb-4 font-bold">
              Sweets Menu
            </h3>
            <div className="space-y-4">
              <MenuItem name="Croissant" price="$8.00" />
              <MenuItem name="Iced Latte" price="$7.00" />
              <MenuItem name="Iced Coffee" price="$8.00" />
              <MenuItem name="Latte" price="$7.00" />
            </div>
          </motion.div>

          {/* Chocolate Menu Bottom: (Col 7-8, Row 5-8) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-4 bg-[#FDFBF7] border border-[#E6E0D5] rounded-[2.5rem] p-6 shadow-sm"
          >
            <h3 className="font-serif text-xl text-[#8B5E3C] mb-4 font-bold">
              Chocolate Menu
            </h3>
            <div className="space-y-4">
              <MenuItem name="Mexican Hot Choc" price="$3.00" />
              <MenuItem name="Café Mocha" price="$5.00" />
              <MenuItem name="Dark Choc Mocha" price="$7.00" />
              <MenuItem name="Mint Hot Cocoa" price="$8.00" />
            </div>
          </motion.div>

          {/* Final Sweets Menu: (Col 1-3, Row 6-8) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-3 md:row-span-3 bg-[#FDFBF7] border border-[#E6E0D5] rounded-[2.5rem] p-6 shadow-sm"
          >
            <h3 className="font-serif text-2xl text-[#8B5E3C] mb-4 font-bold">
              Sweets Menu
            </h3>
            <div className="space-y-2">
              <MenuItem name="Blueberry Muffin" price="$7.00" />
              <MenuItem name="Cinnamon Roll" price="$7.00" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
