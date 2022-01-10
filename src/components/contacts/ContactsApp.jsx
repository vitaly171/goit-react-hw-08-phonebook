import React from 'react';
import ContactForm from './Form/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactList';
import Section from './Section/Section';
import Container from './Container/Container';

export default function ContactsApp() {

  return (
      <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
      <Filter />
        <ContactList />
        </Section>
        </Container>
  );
}