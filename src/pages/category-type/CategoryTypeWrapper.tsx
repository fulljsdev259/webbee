import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { CategoryType } from "./CategoryType";

interface CategoryTypeInterface {}

export const CategoryTypeWrapper: React.FC<CategoryTypeInterface> = () => {
  const { categoryId }: any = useParams();

  const { categories } = useSelector((state: any) => state.manageTypes);

  if (categories[categoryId]) {
    return <CategoryType categoryId={categoryId} />;
  } else {
    return <div> Not found</div>;
  }
};
