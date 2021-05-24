import React, { Component } from 'react';
import {Card,ListGroup} from 'react-bootstrap';
export default class SideMenu extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>DashBoard</ListGroup.Item>
                            <ListGroup.Item>Payment</ListGroup.Item>
                            <ListGroup.Item>Inquiry</ListGroup.Item>
                            <ListGroup.Item>Inquiry</ListGroup.Item>
                            <ListGroup.Item>Inquiry</ListGroup.Item>

                            
                        </ListGroup>
                </Card>
              </div>

            );

    }
        
}
