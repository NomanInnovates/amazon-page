import React from "react";
import "./home.css";
import Product from "./product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="Home_img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/CyberMonday/Fuji_TallHero_CM_v2_en_US_1x._CB414209152_.png"
        />

        <div className="home_row">
          <Product
            id="938402390"
            title="The lean startup"
            image="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
            price={19.99}
            rating={4}
          />
          <Product
            id="0492850934"
            title="Burt's Bees, Beeswax Bounty Fruit Gift Set"
            image="https://m.media-amazon.com/images/I/71bDI46iX5L._AC_UL320_.jpg"
            price={89.66}
            rating={4}
          />
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home_row">
          <Product
            id="940928403"
            title="Neutrogena Hydro Boost Hyaluronic Acid Hydrating Water Gel Daily Face Moisturizer for Dry Skin"
            image="https://m.media-amazon.com/images/I/71ICfUvvEyL._AC_UL320_.jpg"
            price={8.41}
            rating={4}
          />
          <Product
            id="04038759205"
            title="Lip Smacker Lippy Pal Lip Balm, Unicorn Magic, 0.14 ounce"
            image="https://m.media-amazon.com/images/I/61kAXTBHHYL._AC_UL320_.jpg"
            price={5.68}
            rating={4}
          />
          <Product
            id="9387402482"
            title="HP 63 | Ink Cartridge | Black | F6U62AN"
            image="https://images-na.ssl-images-amazon.com/images/I/413DcxIjkOL.jpg"
            price={3.45}
            rating={5}
          />
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>
        <div className="home_row">
          {/* Product */}
          <Product
            id="39248407402"
            title="
        Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black"
            image="https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg"
            price={49.45}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
