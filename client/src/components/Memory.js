import React, { Component } from 'react';
import { Container, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/item_actions';
import {
    Card, Button
  } from 'reactstrap';
import PropTypes from 'prop-types';

class Memory extends Component {
    componentDidMount() {
        this.props.getItems();
    }
    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }
    render() {
        const { items } = this.props.item;
        return(
            <Container>
                
                <Card inverse>
                    <TransitionGroup classname="todo-list">
                        {items.map(({ _id, name })  => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem style={{ backgroundColor: '#333', borderColor: 'white'}}>
                                    <Button
                                    className="remove-btn"
                                    color="warning"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                                
                            </CSSTransition>
                            
                        ))}
                        
                    </TransitionGroup>
                </Card>
            </Container>
        );

    }
}
Memory.propTypes = {
    getItems: PropTypes.func.isRequired,
    Item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item
});
export default connect(mapStateToProps, { getItems, deleteItem })(Memory);