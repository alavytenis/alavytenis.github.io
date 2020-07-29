import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title, heading, avatar }) {
  return (
    <div id="logo">
      <Link to="/">
        <span className="image avatar48">
          <img src={avatar} alt="" />
        </span>
        <p>{heading}</p>
      </Link>
    </div>
  );
}
