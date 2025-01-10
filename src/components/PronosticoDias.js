import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Icon from './Icon'
const PronosticoDias = ({ pronosticoCincoDias }) => {
  const obtenerDiaSemana = (fecha) => {
    const [dia, mes] = fecha.split("/").map(Number);
    const fechaFormateada = new Date(new Date().getFullYear(), mes - 1, dia);
    return new Intl.DateTimeFormat("es-ES", { weekday: "long" }).format(fechaFormateada);
  };

  return (
    <View style={styles.pronosticoDias}>
      <Text style={styles.titulillo}>Pronóstico a 5 Días</Text>
      <ScrollView horizontal={true} style={styles.listaDias}>
        {pronosticoCincoDias.map((dia, index) => (
          <View key={index} style={styles.dia}>
            <Text style={styles.text}>{obtenerDiaSemana(dia.fecha)}</Text>
            <Text style={styles.text}>Máx: {dia.temperaturaMax}°C</Text>
            <Icon datosClima={dia} />
            <Text style={styles.text}>Mín: {dia.temperaturaMin}°C</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
 

const styles = StyleSheet.create({
  pronosticoDias: {
    marginVertical: 20,
  },
  titulillo: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    color: '#fff',
    paddingBottom: 12,
  },
  listaDias: {
    flexDirection: 'row',
    overflow: 'scroll',
    gap: 12,
    marginLeft: 10,
  },
  dia: {
    backgroundColor: '#2c3e50',
    padding: 8,
    marginHorizontal: 6,
    borderRadius: 10,
    Width: 70,
    alignItems: 'center',
    gap: 12,
  },
  text: {
    color: '#fff',
  },
});

export default PronosticoDias;