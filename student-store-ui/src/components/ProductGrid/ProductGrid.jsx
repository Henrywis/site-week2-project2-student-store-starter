
// import React, { useState } from "react";
// import ProductCard from "../ProductCard/ProductCard";
// import { AiOutlineLoading } from "react-icons/ai";
// import "./ProductGrid.css";

// export default function ProductGrid({ products }) {
//   const [filterCategory, setFilterCategory] = useState("All Categories");

//   const filteredProducts = products.filter((product) => {
//     if (filterCategory === "All Categories") {
//       return true;
//     } else {
//       return product.category === filterCategory;
//     }
//   });

//   const handleCategoryClick = (category) => {
//     setFilterCategory(category);
//   };

//   return (
//     <>
//       <h3 className="grid-heading">Best Selling Products</h3>
//       <div className="category-buttons">
//         <button
//           className={filterCategory === "All Categories" ? "active" : ""}
//           onClick={() => handleCategoryClick("All Categories")}
//         >
//           All Categories
//         </button>
//         <button
//           className={filterCategory === "Food" ? "active" : ""}
//           onClick={() => handleCategoryClick("Food")}
//         >
//           Food
//         </button>
//         <button
//           className={filterCategory === "Clothing" ? "active" : ""}
//           onClick={() => handleCategoryClick("Clothing")}
//         >
//           Clothing
//         </button>
//         <button
//           className={filterCategory === "Accessories" ? "active" : ""}
//           onClick={() => handleCategoryClick("Accessories")}
//         >
//           Accessories
//         </button>
//         <button
//           className={filterCategory === "Tech" ? "active" : ""}
//           onClick={() => handleCategoryClick("Tech")}
//         >
//           Tech
//         </button>
//       </div>
//       <div className="product-grid">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product, i) => (
//             <ProductCard product={product} key={i} />
//           ))
//         ) : (
//           <p>No products found for the selected category.</p>
//         )}
//       </div>
//     </>
//   );
// }



// import React, { useState } from "react";
// import ProductCard from "../ProductCard/ProductCard";
// import { AiOutlineLoading } from "react-icons/ai";
// import "./ProductGrid.css";

// export default function ProductGrid({ products }) {
//   const [filterCategory, setFilterCategory] = useState("All Categories");

//   const handleCategoryClick = (category) => {
//     setFilterCategory(category);
//   };

//   const filteredProducts = products.filter((product) => {
//     if (filterCategory === "All Categories") {
//       return true;
//     } else {
//       return product.category === filterCategory;
//     }
//   });

//   return (
//     <>
//       <h3 className="grid-heading">Best Selling Products</h3>
//       <div className="category-buttons">
//         <button
//           className={filterCategory === "All Categories" ? "active" : ""}
//           onClick={() => handleCategoryClick("All Categories")}
//         >
//           All Categories
//         </button>
//         <button
//           className={filterCategory === "Food" ? "active" : ""}
//           onClick={() => handleCategoryClick("Food")}
//         >
//           Food
//         </button>
//         <button
//           className={filterCategory === "Clothing" ? "active" : ""}
//           onClick={() => handleCategoryClick("Clothing")}
//         >
//           Clothing
//         </button>
//         <button
//           className={filterCategory === "Accessories" ? "active" : ""}
//           onClick={() => handleCategoryClick("Accessories")}
//         >
//           Accessories
//         </button>
//         <button
//           className={filterCategory === "Tech" ? "active" : ""}
//           onClick={() => handleCategoryClick("Tech")}
//         >
//           Tech
//         </button>
//       </div>
//       <div className="product-grid">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product, i) => (
//             <ProductCard product={product} key={i} />
//           ))
//         ) : (
//           <p>No products found for the selected category.</p>
//         )}
//       </div>
//     </>
//   );
// }



import React, { useState, useEffect} from "react";
import ProductCard from "../ProductCard/ProductCard";
import { AiOutlineLoading } from "react-icons/ai";
import "./ProductGrid.css";

export default function ProductGrid({ products }) {
  const [filterCategory, setFilterCategory] = useState("All Categories");
  // const [prods2, setProds2] = useState(products);
  let prods2 = products;
  const handleCategoryClick = (category) => {
    setFilterCategory(category);
    // const filteredProducts = products.filter((product) => {
    //   if (category === "All Categories") {
    //     return true;
    //   }
    //   return product.category === category;
    // })
    // setProds2(filteredProducts);
    
  };

  useEffect(() =>{
    prods2 = products.filter((product) => {
      if (filterCategory === "All Categories") {
        return true;
      }
      return product.category === filterCategory;
    })
    console.log("Here" + filterCategory);
    console.log("test" + prods2);
  })
  
  console.log("default" + products);
  

  // const filteredProducts = products.filter((product) => {
  //   if (filterCategory === "All Categories") {
  //     return true;
  //   }
  //   return product.category === filterCategory;
  // });



  return (
    <>
      <h3 className="grid-heading">Best Selling Products</h3>
      <div className="category-buttons">
        <button
          className={filterCategory === "All Categories" ? "active" : ""}
          onClick={() => handleCategoryClick("All Categories")}
        >
          All Categories
        </button>
        <button
          className={filterCategory === "Food" ? "active" : ""}
          onClick={() => handleCategoryClick("food")}
        >
          Food
        </button>
        <button
          className={filterCategory === "Clothing" ? "active" : ""}
          onClick={() => handleCategoryClick("clothing")}
        >
          Clothing
        </button>
        <button
          className={filterCategory === "Accessories" ? "active" : ""}
          onClick={() => handleCategoryClick("accessories")}
        >
          Accessories
        </button>
        <button
          className={filterCategory === "Tech" ? "active" : ""}
          onClick={() => handleCategoryClick("tech")}
        >
          Tech
        </button>
      </div>
      <div className="product-grid">
        {prods2.length > 0 ? (
          prods2.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))
        ) : (
          <p>No products found for the selected category.</p>
        )}
      </div>
    </>
  );
}
