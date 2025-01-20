'use client'; // Marks this file as a client-side component

import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import styles from './DynamicCard.module.css'; // Import CSS module

function DynamicCard() {
  // Step 1: Define an array of 12 card objects in the state
  const [cards, setCards] = useState(
    Array.from({ length: 12 }, (_, index) => ({
      id: index + 1, // Unique ID for each card
      title: `Card Title ${index + 1}`,
      subtitle: `Card Subtitle ${index + 1}`,
      text: `Some quick example text to build on card ${index + 1}`,
      buttonText: `Go somewhere ${index + 1}`,
      link1: '#',
      link2: '#',
    }))
  );

  // Step 2: Update the state for a specific card
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    cardId: number
  ) => {
    const { name, value } = event.target;

    // Update the specific card's state based on the card ID
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId
          ? { ...card, [name]: value } // Update the property of the card
          : card
      )
    );
  };

  return (
    <div>
      {/* Step 3: Render 12 cards with dynamic content */}
      {cards.map((card) => (
        <div key={card.id} className={styles.dynamicCardContainer}>
          {/* Form to edit the card's content */}
          <div className={styles.formSection}>
            <h3>Adjust Card {card.id}</h3>
            <Form>
              <Form.Group className="mb-3" controlId={`formCardTitle${card.id}`}>
                <Form.Label className={styles.formLabel}>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={card.title}
                  onChange={(e) => handleChange(e, card.id)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId={`formCardSubtitle${card.id}`}>
                <Form.Label className={styles.formLabel}>Subtitle</Form.Label>
                <Form.Control
                  type="text"
                  name="subtitle"
                  value={card.subtitle}
                  onChange={(e) => handleChange(e, card.id)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId={`formCardText${card.id}`}>
                <Form.Label className={styles.formLabel}>Text</Form.Label>
                <Form.Control
                  as="textarea"
                  name="text"
                  value={card.text}
                  onChange={(e) => handleChange(e, card.id)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId={`formCardButtonText${card.id}`}>
                <Form.Label className={styles.formLabel}>Button Text</Form.Label>
                <Form.Control
                  type="text"
                  name="buttonText"
                  value={card.buttonText}
                  onChange={(e) => handleChange(e, card.id)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId={`formCardLink1${card.id}`}>
                <Form.Label className={styles.formLabel}>Link 1</Form.Label>
                <Form.Control
                  type="text"
                  name="link1"
                  value={card.link1}
                  onChange={(e) => handleChange(e, card.id)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId={`formCardLink2${card.id}`}>
                <Form.Label className={styles.formLabel}>Link 2</Form.Label>
                <Form.Control
                  type="text"
                  name="link2"
                  value={card.link2}
                  onChange={(e) => handleChange(e, card.id)}
                />
              </Form.Group>
            </Form>
          </div>

          {/* Preview of the card */}
          <div className={styles.cardPreview}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>{card.title}</Card.Title>
                <Card.Subtitle className={`mb-2 text-muted ${styles.cardSubtitle}`}>
                  {card.subtitle}
                </Card.Subtitle>
                <Card.Text className={styles.cardText}>{card.text}</Card.Text>
                <Card.Link href={card.link1} className={styles.cardLink}>
                  Card Link 1
                </Card.Link>
                <Card.Link href={card.link2} className={styles.cardLink}>
                  Card Link 2
                </Card.Link>
                <Button variant="primary" className={styles.cardButton}>
                  {card.buttonText}
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DynamicCard;
