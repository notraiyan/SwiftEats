import React, {Component} from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import Header from './Header';
import Footer from './Footer';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch,Route,Redirect} from 'react-router-dom';


class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
        };
    }
    
    render(){ 
        const HomePage = ()=> {
            return (
                <Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
                promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
                leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
                />
            );
        }
        const SelectDish = ({match})=> {
            return (
                <Dishdetail selectedDish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.id,10))[0]}
                comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.id,10))}
                />
            );
        }
        return (
            <div className="whole">
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
                    <Route exact path="/about" component={()=><About leaders={this.state.leaders}/>}/>
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

export default Main;
