import React, {Component} from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch,Route,Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}
class Main extends Component {
    constructor(props){
        super(props);
    }
    
    render(){ 
        const HomePage = ()=> {
            return (
                <Home dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
                promotion={this.props.promotions.filter((promotion)=>promotion.featured)[0]}
                leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
                />
            );
        }
        const SelectDish = ({match})=> {
            return (
                <Dishdetail selectedDish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.id,10))[0]}
                comments={this.props.comments.filter((comment)=>comment.dishId===parseInt(match.params.id,10))}
                />
            );
        }
        return (
            <div className="whole">
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>}/>
                    <Route exact path="/about" component={()=><About leaders={this.props.leaders}/>}/>
                    <Route path="/menu/:id" component={SelectDish}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Redirect to="/home"/>
                </Switch>
                <br/>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
