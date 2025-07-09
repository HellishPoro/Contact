import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { FilterForm, FilterFormValues } from 'src/components/FilterForm';
import { contactStore } from 'src/store/contactsStore';


export const ContactListPage = observer(() => {
  const { 
    groups, 
    filteredContacts,
    contactsLoading, 
    groupsLoading,
    setFilterParams
  } = contactStore;

  const handleSubmit = useCallback((fv: Partial<FilterFormValues>) => {
    setFilterParams(fv);
  }, [setFilterParams]);

  if (contactsLoading || groupsLoading) return <div>Загрузка...</div>;

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm 
          groupContactsList={groups} 
          initialValues={{}} 
          onSubmit={handleSubmit} 
        />
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