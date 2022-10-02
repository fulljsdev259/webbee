import React, { useMemo } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function Header() {

    const { categories } = useSelector((state: any) => state.manageTypes)

    const renderNavbar = useMemo(() => {
        const keys = Object.keys(categories)
        return (
            <ul className='header-ul' >
                 <li>InventerZilla</li>
                 <li><Link to='/' >All</Link></li>
                 {
                    keys.map((key) => {
                        const category = categories[key]
                        return (
                            <li>
                                <Link to={`type/${key}`} >{category.categoryName.value}</Link>
                            </li>
                        )
                    })
                 }
                 <li><Link to={"manage-types"}>Manage Types</Link></li>
            </ul>
        )
    }, [categories])

  return (
    <header className='common-header'>
       {renderNavbar}
    </header>
  );
}
