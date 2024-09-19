// components/Card.tsx
import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="rounded-xl bg-gray-800 p-2 shadow-lg">{children}</div>;
};

export default Card;
