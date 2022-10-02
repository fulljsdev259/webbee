import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Header() {
  const { categories } = useSelector((state: any) => state.manageTypes);
  const [isOpen, setOpen] = useState(false);

  const renderNavbar = useMemo(() => {
    const keys = Object.keys(categories);
    return (
      <>
        <a key={'inventer-zilla'} className=" active">InventerZilla</a>
        <Link key={'all'} to="/">All</Link>
        {keys.map((key) => {
          const category = categories[key];
          return <Link key={key} to={`type/${key}`}>{category.categoryName.value}</Link>;
        })}
        <Link key={"manage-types"} to={"manage-types"}>Manage Types</Link>
      </>
    );
  }, [categories]);

  return (
    <div className={"topnav" + (isOpen ? " responsive" : "")} id="myTopnav">
      {renderNavbar}

      <a className="icon">
        <i onClick={() => setOpen(!isOpen)} className="fa fa-bars"></i>
      </a>
    </div>
  );
}
