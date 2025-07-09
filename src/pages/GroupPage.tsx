import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { Empty } from 'src/components/Empty';
import { ContactCard } from 'src/components/ContactCard';
import { contactStore } from 'src/store/contactsStore';
import { observer } from 'mobx-react-lite';

export const GroupPage = observer(() => {
  const { groupId } = useParams<{ groupId: string }>();
    const { 
        getGroupContacts, 
        groupsLoading, 
        contactsLoading,
        groups
    } = contactStore;

    const currentGroup = groups.find(g => g.id === groupId);
    const groupContactsList = groupId ? getGroupContacts(groupId) : [];

    if (groupsLoading || contactsLoading) return <div>Загрузка...</div>;

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