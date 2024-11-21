import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1f1e25',
    borderRadius: 8,
  },

  name: {
    paddingLeft: 16,
    flex: 1,
    fontSize: 16,
    color: '#ffffff',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e23c44',
    width: 56,
    height: 56,
    borderRadius: 8,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 26,
  },
})
