import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./produto.css";

const MakeupCard = ({ makeup }) => (
  <div className="body">
    <Container>
      <Card>
        <div className="produto-card">
          <img
            className="card-img"
            variant="top"
            src={makeup.image_link}
            alt={makeup.name}
          />
          <Card.Body>
            <div className="produto-card__info">
              <h1 className="produto-card__title">{makeup.name}</h1>
              <span className="produto-card__price">R${makeup.price}</span>
              <footer className="produto-card__footer">
                {makeup.description}

                <div className="produto-card__link">
                  <Button
                    variant="primary"
                    href={makeup.product_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comprar
                  </Button>
                </div>
              </footer>
            </div>
          </Card.Body>
        </div>
      </Card>
    </Container>
  </div>
);

export default MakeupCard;
