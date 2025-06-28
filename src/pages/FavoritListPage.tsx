import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { useAppSelector } from 'src/store/hooks/hooks';

export const FavoritListPage = memo(() => {
  const { contacts, favorites, loading } = useAppSelector(state => state.contacts);
  const favoriteContacts = contacts.filter(contact => 
    favorites.includes(contact.id) 
  );
  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Row xxl={4} className="g-4">
      {favoriteContacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});