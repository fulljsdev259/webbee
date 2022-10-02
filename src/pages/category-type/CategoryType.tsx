import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { reduxConstants } from "../../redux/constants";
import { CategoryItem } from "../../components/categoryItem";

interface CategoryTypeInterface {
  categoryId: string
}

export const CategoryType: React.FC<CategoryTypeInterface> = ({ categoryId }) => {


  const dispatch = useDispatch();
  const { categories, categoriesItems } = useSelector(
    (state: any) => state.manageTypes
  );

  const relatedItems = categoriesItems?.[categoryId];
  const attributes = categories?.[categoryId]?.attributes;
  const titleField: any = categories?.[categoryId]?.titleField?.value;

  const addCategory = () => {
    dispatch({
      payload: { categoryId },
      type: reduxConstants.ADD_CATEGORY_ITEM,
    });
  };

  const deleteItem = (itemId: string) => {
    dispatch({
      payload: { categoryId, itemId },
      type: reduxConstants.DELETE_CATEGORY_ITEM,
    });
  };

  const updateCategoryItemFied = (
    attributeId: string,
    itemId: string,
    value: string
  ) => {
    dispatch({
      payload: { categoryId, itemId, attributeId, value },
      type: reduxConstants.UDPATE_CATEGORY_ITEM,
    });
  };

  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} lg={4}>
        {Object.keys(relatedItems?.items || {}).map((key) => {
          return (
            <Col key={key} className="category-col mb-4">
              <CategoryItem
                deleteItem={() => deleteItem(key)}
                values={relatedItems.items[key]}
                titleFieldName={titleField}
                typeDetails={categoriesItems}
                details={attributes}
                onValueChange={(attributeId: string, value: string) =>
                  updateCategoryItemFied(attributeId, key, value)
                }
              />
            </Col>
          );
        })}
        <Col key='add-btn-wrapper-col' className="category-col mb-4">
          <div className="add-btn-wrapper" >
            <Button onClick={addCategory} variant="primary">
              Add Item
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
