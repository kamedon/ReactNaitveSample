import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
  },
  icon: {
    color: '#000',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  search: {
    paddingVertical: Platform.OS === 'ios' ? 6 : 10,
    paddingHorizontal: 12,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchActive: {
    padding: 0,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(142, 142,142,0.12)',
  },
  searchIcon: {
    color: '#9b9b9b',
    paddingLeft: 2,
    paddingRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#000',
  },
  searchClearIcon: {
    color: '#aaa',
  },
  searchCancelButton: {
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  searchCancelButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default styles;
