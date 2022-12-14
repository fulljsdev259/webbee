import React, { } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Category } from "../../components/category";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { reduxConstants } from "../../redux/constants";


interface CategoriesInterface {}

export const Categories: React.FC<CategoriesInterface> = () => {

    const dispatch = useDispatch()
    const { categories } = useSelector((state: any) => state.manageTypes)

    const addCategory = () => {
        dispatch({ type: reduxConstants.ADD_CATEGORY })
    }

  return (
    <Container fluid>
      <Row xs={1} sm={2} md={3} lg={4}>
       {
        Object.keys(categories).map((key) => {
            return( 
                <Col key={key} className="category-col mb-4">
                    <Category details={categories[key]} />
                </Col>
            )
        })
       }
        <Col key={'add-category-col'} className="category-col mb-4">
            <div className="add-btn-wrapper" >
                <Button onClick={addCategory} variant="primary">Add Category</Button>
            </div>
        </Col>
      </Row>
    </Container>
  );
};
