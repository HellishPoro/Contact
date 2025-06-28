import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { Empty } from 'src/components/Empty';
import { ContactCard } from 'src/components/ContactCard';
import { useAppSelector } from 'src/store/hooks/hooks';

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>();
  const { contacts, groups, loading } = useAppSelector(state => state.contacts);
  
  const currentGroup = groups.find(({ id }) => id === groupId);
  const groupContactsList = currentGroup 
    ? contacts.filter(({ id }) => currentGroup.contactIds.includes(id))
    : [];

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Row className="g-4">
      {currentGroup ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={currentGroup} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {groupContactsList.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : <Empty />}
    </Row>
  );
});