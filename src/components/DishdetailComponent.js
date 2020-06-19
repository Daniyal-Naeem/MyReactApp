import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

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
  if (!props.dish) {
    return (
      <div></div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <RenderComments comments={props.dish.comments} />
      </div>
    </div>
  );
}

export default DishDetail;