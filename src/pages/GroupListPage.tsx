// import { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { GroupContactsCard } from 'src/components/GroupContactsCard';
import { observer } from 'mobx-react-lite';
import { contactStore } from 'src/store/contactsStore';

export const GroupListPage = observer(() => {
  const { groups, groupsLoading, error } = contactStore;

  console.log('Groups data:', groups); // Добавьте для отладки

  if (groupsLoading) return <div>Загрузка групп...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!groups.length) return <div>Нет доступных групп</div>;

  return (
    <Row xxl={4}>
      {groups.map((group) => (
        <Col key={group.id}>
          <GroupContactsCard groupContacts={group} withLink />
        </Col>
      ))}
    </Row>
  );
});