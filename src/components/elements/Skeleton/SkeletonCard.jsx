import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './skeleton.style.css';

const SkeletonCard = () => {
  return (
    <ul className="list">
      {Array(10)
        .fill()
        .map((item, index) => (
          <li className="card" key={index}>
            <Skeleton height={317} width={230} />
          </li>
        ))}
    </ul>
  );
};
export default SkeletonCard;
