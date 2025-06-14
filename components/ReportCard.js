import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ReportCard({ report }) {
  const reportTitle = report.title || 'Report'; // Default title if not provided
  const displayData = Object.entries(report).filter(([key]) => key !== 'title');

  return (
    <View style={styles.container}>
      <Text style={styles.reportTitle}>{reportTitle}</Text>

      {displayData.map(([key, value]) => (
        <View key={key} style={styles.detailRow}>
          <Text style={styles.detailLabel}>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</Text>
          <Text style={styles.detailValue}>{value}</Text>
        </View>
      ))}

      {/* You can add a common action button here if needed */}
      {/* <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>View Details</Text>
        <FontAwesome name="angle-right" size={20} color="#FFFFFF" />
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    width: '75%',
    alignSelf: 'center',
    shadowColor: "#1F2937",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  reportTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2D3748',
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF2F7',
  },
  detailLabel: {
    fontSize: 16,
    color: '#4A5568',
    fontWeight: '500',
    flex: 1,
    paddingRight: 10,
  },
  detailValue: {
    fontSize: 16,
    color: '#2D3748',
    fontWeight: '600',
    textAlign: 'right',
  },
  actionButton: {
    backgroundColor: '#4C51BF',
    padding: 14,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 8,
  },
}); 