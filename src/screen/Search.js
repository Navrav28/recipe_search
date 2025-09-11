import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Search = () => {
  return (
    <View style={styles.container}>
      <LinearGradient style={styles.container} colors={['#3eb489', '#90EE90']}>
        <Text
          style={{
            color: '#000',
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 45,
            marginLeft: 15,
          }}
        >
          Search here
        </Text>

        <View
          style={styles.searchView}
          onPress={() => navigation.navigate('Search')}
        >
          <TextInput
            style={styles.searchInput}
            //   focusable={true}
            autoFocus={true}
            placeholder="Search for recipes..."
          />
          {/* <Text
            style={{
              color: '#79797dff',
              fontSize: 20,
              fontWeight: '500',
              marginLeft: 10,
            }}
          >
            Search for recipes...
          </Text> */}
          <TouchableOpacity>
            <Image
              style={[
                styles.profilAndNotiImg,
                { tintColor: '#79797dff', height: 34 },
              ]}
              source={require('../images/search.png')}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchView: {
    width: '96%',
    height: 70,
    // borderWidth: 1,
    backgroundColor: '#ffffffcc',

    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 8,
    marginTop: 5,
    // padding: 10,
    elevation: 2,
    shadowColor: '#e6e2e2ff',
  },
  searchInput: {
    width: '90%',
    fontSize: 20,
    height: 70,
    // backgroundColor: '#ffffffcc',
    borderRadius: 20,
    paddingLeft: 10,
  },
  profilAndNotiImg: {
    width: 30,
    height: 30,
    marginRight: 10,

    // resizeMode: 'contain',
  },
});
