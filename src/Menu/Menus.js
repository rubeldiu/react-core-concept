import React, { useState } from 'react'
import Categories from './Categories';
import items from './data'
import Menu from './Menu';

const allCategories =['all',...new Set(items.map((item) => item.category))]

const Menus = () => {
    const [menuItems,setMenuItems]=useState(items);
    const [categories,setCategories]=useState(allCategories);

    const filterItems=(category) =>{
        if(category ==='all'){
            setMenuItems(items);
            return;
        }
        const newItems =items.filter((item) => item.category ===category)
        setMenuItems(newItems);
    }

    return (
        <div>
            <h2>Our menu</h2>
            <Categories categories={categories} filterItems={filterItems}/>
            <Menu items={menuItems}/>
            
        </div>
    )
}

export default Menus
