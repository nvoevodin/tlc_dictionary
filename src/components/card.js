import React from "react";
import { Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi } from '@fortawesome/free-solid-svg-icons'

import classes from "./card.module.css";

const share = (
  <Tooltip id="share">
    <strong>Показать Друзелям!</strong>
  </Tooltip>
);

class Cards extends React.Component{
  render() {
    return (
      <Card className={classes.cards}>
        <Card.Body>
        <FontAwesomeIcon icon={faTaxi} size = '8x' style = {{float:'right', color: 'grey'}}/>
          <Card.Title
            style={{
              fontSize: "30px",
              fontWeight: "bolder",
              color: "black",
              fontFamily: "sans-serif",
            }}
          >
            {this.props.title.toUpperCase()}
            

            
          </Card.Title>
          
          <Card.Text>{this.props.description}</Card.Text>

          <Button
               
                href = {this.props.address}
              >
              Dictionary
              </Button>
              
 
       
        </Card.Body>
      </Card>
    );
  }
}

export default Cards;
