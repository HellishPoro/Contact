import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactCard } from 'src/components/ContactCard';
import { Empty } from 'src/components/Empty';
import { useAppSelector } from 'src/store/hooks/hooks';

export const ContactPage: FC = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const { contacts, loading } = useAppSelector(state => state.contacts);
  const contact = contacts.find(({ id }) => id === contactId);

  if (loading) {
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