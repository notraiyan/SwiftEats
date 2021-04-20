import React from 'react';
import {Card, CardImg,CardBody,CardText,CardTitle,List,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

function renderComments(comments){
    const cmnts = comments.map(comment => {
        return (
            <>
            <List type="unstyled" key={comment.id}>
                <li>{comment.comment}</li>
                <li>-- <b>{comment.author}</b>,
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(comment.date))}
                </li>
            </List>
            <br/>
            </>
        );
    })
    return (
        <>
            {cmnts}
        </>
    ); 
}
function renderDish(dish){
    return (
        <Card>
            <CardImg src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle><b>{dish.name}</b></CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}
function Dishdetail(props){
    const dish = props.selectedDish;
    const comment = props.comments;
    if(dish!=null){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.selectedDish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 col-sm-12">
                        <h3>{props.selectedDish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div  className="col-12 col-md-5 m-auto">
                        {renderDish(dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-auto">
                        <h3>Comments</h3>
                        <br/>
                        {renderComments(comment)}
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (<></>);
    }
}


export default Dishdetail;