import React from "react";
import { Card } from "antd";
import "../Components/Card.css";

const Cards: React.FC = () => {
  return (
    <div className="site-card-border-less-wrapper marg">
      <Card
        title="Card title"
        cover={
          <img
            alt="example"
            src="https://wallpapers.com/images/featured-full/dope-rick-and-morty-gf4jzzsnej66sjnl.jpg"
          />
        }
        hoverable
        bordered={true}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};

export default Cards;
