import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactCard } from 'src/components/ContactCard';
import { Empty } from 'src/components/Empty';
import { useGetContactsQuery } from 'src/store/contactsApi';

export const ContactPage: FC = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const { data: contacts = [], isLoading: contactsLoading } = useGetContactsQuery();
  const contact = contacts.find(({ id }) => id === contactId);

  if (contactsLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};