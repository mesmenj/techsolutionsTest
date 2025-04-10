import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import App from './App';

describe('Gestion RH App', () => {
  it('affiche bien le titre', () => {
    const { getByText } = render(<App />);
    expect(getByText('Gestion RH - Employés')).toBeTruthy();
  });

  it('ajoute un employé et met à jour le compteur', async () => {
    const { getByPlaceholderText, getByText, getByDisplayValue } = render(<App />);

    // Remplir les champs du formulaire
    fireEvent.changeText(getByPlaceholderText('Code'), 'EMP001');
    fireEvent.changeText(getByPlaceholderText('Nom'), 'Mesmen');
    fireEvent.changeText(getByPlaceholderText('Prénom'), 'Jean');
    fireEvent.changeText(getByPlaceholderText('Date de naissance'), '1990-01-01');
    fireEvent.changeText(getByPlaceholderText('Poste'), 'Développeuse');

    // Cliquer sur le bouton Ajouter
    fireEvent.press(getByText('Ajouter'));

    // Attendre que le composant se mette à jour
    await waitFor(() => {
      expect(getByText("Nombre total d'employés : 1")).toBeTruthy();
      expect(getByText('👤 Dupont Alice')).toBeTruthy();
    });
  });

  it('ne doit pas ajouter un employé si les champs sont vides', () => {
    const { getByText } = render(<App />);
    fireEvent.press(getByText('Ajouter'));

    expect(getByText("Nombre total d'employés : 0")).toBeTruthy();
  });
});