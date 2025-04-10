import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    code: '',
    nom: '',
    prenom: '',
    dateNaissance: '',
    poste: ''
  });

  const handleAddEmployee = () => {
    if (form.code && form.nom && form.prenom) {
      setEmployees([...employees, form]);
      setForm({ code: '', nom: '', prenom: '', dateNaissance: '', poste: '' });
    }
  };

  const renderEmployee = ({ item }) => (
    <View style={styles.employeeCard}>
      <Text>Nom: {item.nom} {item.prenom}</Text>
      <Text>Code: {item.code}</Text>
      <Text>Date de naissance: {item.dateNaissance}</Text>
      <Text>Poste: {item.poste}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TechSolutions: Gestion RH - Employés</Text>

      <Text style={styles.subtitle}>Ajouter un employé</Text>
      <TextInput
        placeholder="Code"
        value={form.code}
        onChangeText={(text) => setForm({ ...form, code: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Nom"
        value={form.nom}
        onChangeText={(text) => setForm({ ...form, nom: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Prénom"
        value={form.prenom}
        onChangeText={(text) => setForm({ ...form, prenom: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Date de naissance"
        value={form.dateNaissance}
        onChangeText={(text) => setForm({ ...form, dateNaissance: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Poste"
        value={form.poste}
        onChangeText={(text) => setForm({ ...form, poste: text })}
        style={styles.input}
      />
      <Button title="Ajouter" onPress={handleAddEmployee} />

      <Text style={styles.count}>Nombre total d'employés : {employees.length}</Text>

      <FlatList
        data={employees}
        renderItem={renderEmployee}
        keyExtractor={(item, index) => item.code + index}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, backgroundColor: '#fff',paddingTop:50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10,textAlign:'center' },
  subtitle: { fontSize: 18, fontWeight: '600', marginTop: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    marginVertical: 5,
    borderRadius: 5
  },
  count: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10
  },
  list: {
    marginTop: 10
  },
  employeeCard: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    marginVertical: 5,
    borderRadius: 5
  }
});
