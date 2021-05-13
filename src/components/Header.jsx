import React from 'react'
import './Header.css'

export default function Header({ title }) {
  return (
    <header>
      <h1><a href="#">{title}</a></h1>
    </header>
  );
}