import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Panel(props) {
  return (
    <Card style={{ width: "18rem", height: "19rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body className="card-body">
        <p className="title">{props.name}</p>
        <div className="steam-fav-bts">
          <Button className="steam-btn" variant="dark" size="md">
            <a
              className="steam-link"
              target="_blank"
              href="https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
            >
              Steam
            </a>
          </Button>
          <Button className="fav-btn" variant="dark" size="md">
            <p className="fav">Favourite</p>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default Panel;
