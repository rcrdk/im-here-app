import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    gap: 8,
    flexDirection: 'row',
  },

  nameContainer: {
    justifyContent: 'center',
    backgroundColor: '#1f1e25',
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
  },

  name: {
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
