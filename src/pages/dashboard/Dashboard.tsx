import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CategoryType } from "../category-type";

interface DashboardInterface {}

export const Dashboard: React.FC<DashboardInterface> = () => {
  const { categories } = useSelector((state: any) => state.manageTypes);

  const keys = Object.keys(categories);

  if (!keys.length) {
    return (
      <h5 className="m-3">
        No categories available, please add from{" "}
        <Link to="manage-types">Manage-Type</Link> section
      </h5>
    );
  }
  return (
    <div>
      {keys.map((categoryId) => {
        const item = categories[categoryId];
        return (
          <div key={categoryId}>
            <div className="sticky-header">
              <h3> {item.categoryName.value}</h3>
            </div>
            <CategoryType categoryId={categoryId} />
          </div>
        );
      })}
    </div>
  );
};
