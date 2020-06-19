import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg widh="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return (
      <div></div>
    );
  }
}

function RenderComments({ comments }) {
  if (!comments || comments.length === 0) {
    return (
      <div></div>
    );
  } else {
    const commentsContent = comments.map((c) => {
      return (
        <ul key={c.id} className="list-unstyled">
          <li>{c.comment}</li>
      <li>-- {c.author}, {c.date}</li>
        </ul>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {commentsContent}
      </div>
    );
  }
}

const DishDetail = (props) => {
  console.log('DishDetail component render is invoked');
  if (props.dish  != null) 
    
  return (
    <div className="container">
    <div className="row">
        <Breadcrumb>

            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
        </div>                
    </div>
    <div className="row">
        <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
        </div>
    </div>
    </div>
  );
}

export default DishDetail;