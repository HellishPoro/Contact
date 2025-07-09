import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ContactCard } from 'src/components/ContactCard';
import { Empty } from 'src/components/Empty';
import { contactStore } from 'src/store/contactsStore';

export const ContactPage: FC = observer(() => {
  const { contactId } = useParams<{ contactId: string }>();
  const contact = contactStore.contacts.find(({ id }) => id === contactId);

  if (contactStore.contactsLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
});