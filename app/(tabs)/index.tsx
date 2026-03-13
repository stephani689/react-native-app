import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Menyesuaikan warna status bar di HP (Baterai, Jam, dll) agar serasi */}
      <StatusBar barStyle="light-content" />

      {/* 1. BAGIAN FOTO PROFIL */}
      {/* Pastikan file 'foto.jpg' ada di folder assets/images/ */}
      <Image
        source={require('../../assets/images/foto.jpg')} 
        style={styles.profilePic}
        resizeMode="cover"
      />
      
      {/* 2. BAGIAN NAMA DAN IDENTITAS */}
      <Text style={styles.name}>Stephani Della Christin Zai</Text>
      <Text style={styles.nim}>NIM: 243303621228</Text>
      
      {/* BAGIAN BARU: PROGRAM STUDI */}
      <Text style={styles.prodi}>Program Studi: Sistem Informasi</Text>

      {/* 3. BAGIAN BIO & QUOTE */}
      <View style={styles.bioCard}>
        <Text style={styles.bioText}>
          🚀 Currently mastering React Native SDK 50.{"\n"}
          Goal: Build goated apps!
        </Text>
        
        {/* Garis pemisah tipis */}
        <View style={styles.separator} />

        <Text style={styles.quoteText}>
          "Coding adalah seni mengubah logika menjadi solusi nyata."
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark Charcoal
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75, // Membuat bulat sempurna
    borderWidth: 4,
    borderColor: '#00d4ff', // Biru Neon
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  nim: {
    fontSize: 16,
    color: '#00d4ff', 
    fontWeight: '600',
    marginBottom: 4,
  },
  prodi: {
    fontSize: 15,
    color: '#bbbbbb', // Abu-abu terang untuk hierarki visual
    fontWeight: '400',
    marginBottom: 30, // Jarak lebih lebar sebelum masuk ke Bio Card
    fontStyle: 'italic',
  },
  bioCard: {
    backgroundColor: '#1e1e1e', // Kartu sedikit lebih terang
    padding: 25,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#333',
    width: '100%',
    // Shadow untuk Android
    elevation: 8, 
    // Shadow untuk iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  bioText: {
    color: '#e0e0e0',
    textAlign: 'center',
    lineHeight: 22,
    fontSize: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 15,
    width: '50%',
    alignSelf: 'center',
  },
  quoteText: {
    color: '#00d4ff',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 14,
    opacity: 0.9,
  },
});