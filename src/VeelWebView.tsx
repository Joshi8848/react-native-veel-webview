import React, { useState } from 'react';
import { Modal, View, Button, Pressable, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import Close from './assets/close.png';

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
            <Image
              source={Close}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </Pressable>
        </View>
        <WebView source={{ uri: 'https://dev.veelapp.com' }} />
      </Modal>
    </View>
  );
}
