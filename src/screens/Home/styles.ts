import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#131016',
  },

  box: {
    padding: 16,
  },

  title: {
    color: '#ffffff',
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {
    marginTop: 12,
    color: '#c0c0c0',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
  },

  form: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 24,
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1f1e25',
    color: '#ffffff',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71BA51',
    width: 56,
    height: 56,
    borderRadius: 8,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 26,
  },

  participants: {
    flex: 1,
    padding: 16,
    paddingBottom: 32,
    backgroundColor: '#131016',
  },

  participantsEmpty: {
    padding: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    borderColor: '#1f1e25',
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
  },
})
