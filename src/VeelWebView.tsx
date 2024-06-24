import React, { useState } from 'react';
import { Modal, View, Button, Pressable } from 'react-native';
import { WebView } from 'react-native-webview';
import Close from '../assets/Close';

export default function VeelWebView() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        title="Open Veel"
        onPress={() => {
          setIsModalOpen(true);
        }}
      />
      <Modal
        visible={isModalOpen}
        transparent={true}
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
        animationType="slide"
      >
        <View
          style={{
            backgroundColor: 'white',
            height: 50,
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingHorizontal: 20,
          }}
        >
          <Pressable
            onPress={() => {
              setIsModalOpen(false);
            }}
          >
            <Close />
          </Pressable>
        </View>
        <WebView source={{ uri: 'https://dev.veelapp.com' }} />
      </Modal>
    </View>
  );
}
