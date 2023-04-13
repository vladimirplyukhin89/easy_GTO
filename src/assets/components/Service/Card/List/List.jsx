import React from 'react'

const List = ({ items }) => {
  const renderedItems = items.map((item, index) => (
    <li className={`list-item item-${index + 1}`} key={index}>
      <p className={s.subtext}>{item}</p>
    </li>
  ))

  return <ul className="list">{renderedItems}</ul>
}

export default List
