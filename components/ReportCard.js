import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ReportCard({ report }) {
  return (
    <View style={styles.container}>
      {/* Report title */}
      <Text style={styles.reportTitle}>Report</Text>

      {/* Progress Section */}
      <TouchableOpacity style={styles.sectionContainer}>
        <View>
          <Text style={styles.sectionTitle}>Progress</Text>
          <Text style={styles.detailText}>Goal: {report.goal}</Text>
          <Text style={styles.detailText}>Networth: {report.networth}</Text>
          <Text style={styles.detailText}>Monthly Savings: {report.monthly}</Text>
        </View>
        <FontAwesome name="angle-right" size={24} color="#9CA3AF" />
      </TouchableOpacity>

      {/* FIRE Timeline Section */}
      <TouchableOpacity style={styles.sectionContainer}>
        <View>
          <Text style={styles.sectionTitle}>FIRE Timeline</Text>
          <Text style={styles.detailText}>Retire Year: {report.retireYear}</Text>
          <Text style={styles.detailText}>10% Growth: {report.growthYear}</Text>
        </View>
        <FontAwesome name="angle-right" size={24} color="#9CA3AF" />
      </TouchableOpacity>

      {/* Grade Section */}
      <TouchableOpacity style={styles.sectionContainer}>
        <View>
          <Text style={styles.sectionTitle}>Grade</Text>
          <Text style={styles.detailText}>Savings rate: {report.savingsRate}</Text>
          <Text style={styles.detailText}>Grade: {report.grade}</Text>
        </View>
        <FontAwesome name="angle-right" size={24} color="#9CA3AF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF', // White background
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    // Add shadow if needed to match the image
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1F2937', // Dark text color
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB', // Light grey border
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937', // Dark text color
    marginBottom: 4,
  },
  detailText: {
    fontSize: 14,
    color: '#4B5563', // Medium grey text color
  },
}); 