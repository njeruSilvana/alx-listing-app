import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-sm bg-white">
      <img src={image} alt={title} className="rounded-md mb-2" />
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
