// cameraBugSolution.js
import * as React from 'react';
import { Camera, CameraType } from 'expo-camera';
import { StyleSheet, Text, View, Button } from 'react-native';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);
  const [cameraReady, setCameraReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCameraReady = () => {
    setCameraReady(true);
  };

  if (hasPermission === null) {
    return <View/>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (!cameraReady) {
    return (
      <View style={styles.container}>
        <Text>Waiting for camera to initialize...</Text>
        <Camera style={styles.camera} type={type} onCameraReady={handleCameraReady} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} />
      <Button title="Flip Camera" onPress={() => {
        setType(
          type === CameraType.back ? CameraType.front : CameraType.back
        );
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});

export default CameraScreen;