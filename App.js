import React, { useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, Image, StatusBar
} from 'react-native';

const App = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    { id: 1, icon: '🖼️', name: 'Background' },
    { id: 2, icon: '✍️', name: 'Text' },
    { id: 3, icon: '😊', name: 'Sticker' },
    { id: 4, icon: '🎨', name: 'Filter' },
    { id: 5, icon: '✂️', name: 'Crop' },
    { id: 6, icon: '💧', name: 'Blur' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1a1a2e" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>✈️ Fly Thumbnail Maker</Text>
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveBtnText}>Save HD</Text>
        </TouchableOpacity>
      </View>

      {/* Canvas Area */}
      <View style={styles.canvas}>
        <Text style={styles.canvasText}>Tap + to add image</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Tools */}
      <ScrollView horizontal style={styles.toolBar}>
        {tools.map(tool => (
          <TouchableOpacity
            key={tool.id}
            style={[styles.tool, selectedTool === tool.id && styles.toolSelected]}
            onPress={() => setSelectedTool(tool.id)}>
            <Text style={styles.toolIcon}>{tool.icon}</Text>
            <Text style={styles.toolName}>{tool.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1a1a2e' },
  header: { flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', padding: 15, backgroundColor: '#16213e' },
  headerText: { color: '#e94560', fontSize: 18, fontWeight: 'bold' },
  saveBtn: { backgroundColor: '#e94560', padding: 8, borderRadius: 8 },
  saveBtnText: { color: 'white', fontWeight: 'bold' },
  canvas: { flex: 1, margin: 15, backgroundColor: '#0f3460',
    borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
  canvasText: { color: '#ffffff80', fontSize: 16 },
  addBtn: { marginTop: 15, backgroundColor: '#e94560',
    width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' },
  addBtnText: { color: 'white', fontSize: 30 },
  toolBar: { backgroundColor: '#16213e', paddingVertical: 10 },
  tool: { alignItems: 'center', marginHorizontal: 15, padding: 10, borderRadius: 10 },
  toolSelected: { backgroundColor: '#e94560' },
  toolIcon: { fontSize: 24 },
  toolName: { color: 'white', fontSize: 12, marginTop: 4 },
});

export default App;
