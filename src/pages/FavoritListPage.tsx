import { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { useGetContactsQuery, useGetFavoritesQuery } from 'src/store/contactsApi';

export const FavoritListPage = memo(() => {
  const { data: contacts = [], isLoading: contactsLoading } = useGetContactsQuery();
  const { data: favorites = [], isLoading: favoritesLoading } = useGetFavoritesQuery()
  const favoriteContacts = contacts.filter(contact => 
    favorites.includes(contact.id) 
  );
  if (contactsLoading || favoritesLoading) {
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