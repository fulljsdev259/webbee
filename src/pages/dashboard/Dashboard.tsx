import React from "react";
import { useSelector } from "react-redux";
import { CategoryType } from "../category-type";

interface DashboardInterface {}

export const Dashboard: React.FC<DashboardInterface> = () => {
  const { categories } = useSelector((state: any) => state.manageTypes);

  const keys = Object.keys(categories);
  return (
    <div>
      {keys.map((categoryId) => {
        const item = categories[categoryId];
        return (
          <div>
            <div className="sticky-header">
              <h3> {item.categoryName.value}</h3>
            </div>
            <CategoryType key={categoryId} categoryId={categoryId} />
          </div>
        );
      })}
    </div>
  );
};
