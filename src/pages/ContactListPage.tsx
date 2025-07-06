import { memo, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { FilterForm, FilterFormValues } from 'src/components/FilterForm';
import { useGetContactsQuery, useGetGroupsQuery } from 'src/store/contactsApi';
import { ContactDto } from 'src/types/dto/ContactDto';


export const ContactListPage = memo(() => {
  const { data: contacts = [], isLoading: contactsLoading } = useGetContactsQuery();
  const { data: groups = [], isLoading: groupsLoading } = useGetGroupsQuery()
  const [filteredContacts, setFilteredContacts] = useState<ContactDto[]>(contacts);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    let result = [...contacts];

    if (fv.name) {
      const fvName = fv.name.toLowerCase();
      result = result.filter(({ name }) => name.toLowerCase().includes(fvName));
    }

    if (fv.groupId) {
      const group = groups.find(({ id }) => id === fv.groupId);
      if (group) {
        result = result.filter(({ id }) => group.contactIds.includes(id));
      }
    }

    setFilteredContacts(result);
  };

  if (contactsLoading || groupsLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm groupContactsList={groups} initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {filteredContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});