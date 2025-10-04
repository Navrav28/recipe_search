import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import TypeWriter from 'react-native-typewriter';
import { clearWarnings } from 'react-native/types_generated/Libraries/LogBox/Data/LogBoxData';

const RecipesApi = ({ route }) => {
  const { searchTerm } = route.params;
  const [inputValue, setInputValue] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('inputValue', searchItem);
        if (searchTerm || searchItem) {
          console.log('inputValue', searchItem);
          let term = searchTerm || searchItem;
          let res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`,
          );
          const result = await res.json();
          setData(result.meals ?? []);
        } else {
          setData([]);
        }
      } catch (err) {
        setError(err.message);
        console.error('Error in useEffect:', err);
      }
    };

    loadData();
  }, [searchItem, searchTerm]);

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.container} colors={['#3eb489', '#90EE90']}>
        {/* <Text>RecipesApi</Text> */}
        <View>
          <FlatList
            ListHeaderComponent={
              <>
                {/* profile and notification view */}
                <View style={styles.profilAndNoti}>
                  <Image
                    style={styles.profilAndNotiImg}
                    source={require('../images/boy.png')}
                  />
                  <Image
                    style={[
                      styles.profilAndNotiImg,
                      { tintColor: '#070708ff' },
                    ]}
                    source={require('../images/notification.png')}
                  />
                </View>
                {/* user name view */}
                <View>
                  <Text style={styles.username}>{`Hello, Mohit!`}</Text>
                </View>
                {/* typeWritter View */}
                <View style={{ marginLeft: 20, height: 100, marginTop: 10 }}>
                  <TypeWriter typing={1} maxDelay={100}>
                    <Text style={styles.title}>
                      {`Buy your favorite food ,\nand eat it at `}
                      <Text style={styles.titleHighlight}>{`home!`}</Text>
                    </Text>
                  </TypeWriter>
                </View>
                {/* search input view */}
                <View style={styles.searchView}>
                  <TextInput
                    style={styles.searchInput}
                    //   focusable={true}
                    // autoFocus={true}
                    placeholder="Search for recipes..."
                    value={inputValue}
                    onChangeText={text => setInputValue(text)}
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
                  <TouchableOpacity
                    onPress={() => {
                      // setSearchItem(inputValue)

                      if (inputValue.trim() !== '') {
                        setSearchItem(inputValue); // yaha se API trigger hoga
                      } else {
                        console.log('Please enter a search term');
                      }
                    }}
                  >
                    <Image
                      style={[
                        styles.profilAndNotiImg,
                        { tintColor: '#79797dff', height: 34 },
                      ]}
                      source={require('../images/search.png')}
                    />
                  </TouchableOpacity>
                </View>
                {/* Your Dishes text */}
                <Text style={styles.headingPopular}>Your Dishes</Text>
              </>
            }
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 50 }}
            data={data}
            renderItem={({ item, index }) => (
              <TouchableOpacity style={styles.cards}>
                <Image
                  source={{ uri: item.strMealThumb }}
                  style={styles.cardsImg}
                />
                <Text
                  style={styles.cardTitle}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.strMeal}
                </Text>
                {/* <Text style={styles.cardTitle}>
                  {item.strMeal.length > 16
                    ? `${item.strMeal.substring(0, 16)}...`
                    : item.strMeal}
                </Text> */}
                {/* <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '500',
                    color: '#656460ff',
                    textAlign: 'center',
                  }}
                >{`${item.strArea} Dish`}</Text> */}
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: '92%',
                    // backgroundColor: '#675931b7',
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginTop: 14,
                  }}
                >
                  <Text style={{ color: '#000', fontWeight: '800' }}>
                    View More
                  </Text>
                </TouchableOpacity>
                {/* <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '500',
                    color: '#3d3b35ff',
                    textAlign: 'center',
                  }}
                >{`Belongs to ${item.strCategory} Category`}</Text> */}
                {/* <View
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: '#656460ff',
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    borderRadius: 10,
                    justifyContent: 'center',
                            alignItems: 'center',
                    opacity:0.7
                  }}
                >
                  <Image
                    source={require('../images/heart11.png')}
                    style={{
                      width: 22,
                        height: 22,
                      
                      tintColor: '#f7f6f6ff',
                    //   marginRight: 5,
                    }}
                  />
                </View> */}

                {/* <View style={styles.StarAndRatingView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      source={require('../images/star.png')}
                      style={{
                        width: 15,
                        height: 15,
                        tintColor: '#f2b01eff',
                        marginRight: 5,
                      }}
                    />
                    <Text>{index % 2 === 0 ? '4.5' : '4.0'}</Text>
                  </View>

                  <Image
                    source={require('../images/heart11.png')}
                    style={{
                      width: 17,
                      height: 17,
                      // tintColor: '#f2b01eff',
                      marginRight: 5,
                    }}
                  />
                </View> */}
              </TouchableOpacity>
            )}
          />
        </View>
      </LinearGradient>
      {/* <Text>Search Term: {data ? data.meals : 'No data found'}</Text> */}
    </View>
  );
};

export default RecipesApi;

const styles = StyleSheet.create({
  container: { flex: 1 },
  profilAndNoti: {
    marginTop: 50,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilAndNotiImg: {
    width: 30,
    height: 30,
    marginRight: 10,

    resizeMode: 'cover',
  },
  username: {
    color: '#070708ff',
    fontSize: 20,
    marginLeft: 18,
    marginTop: 10,
    fontWeight: '500',
    color: '#333334ff',
  },
  title: {
    fontSize: 28,
    marginLeft: 18,
    marginTop: 10,
    fontWeight: '500',
    color: '#0a0a0aff',
  },
  titleHighlight: {
    color: '#6d7b2bff',
    fontSize: 28,
    marginLeft: 18,
    marginTop: 10,
    fontWeight: '500',
  },
  searchView: {
    width: '94%',
    height: 60,
    // borderWidth: 1,
    backgroundColor: '#ffffffcc',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 8,
    // padding: 10,
    elevation: 2,
    shadowColor: '#e6e2e2ff',
    marginBottom: 10,
  },
  searchInput: {
    width: '90%',
    fontSize: 20,
    height: 60,
    // backgroundColor: '#ffffffcc',
    borderRadius: 20,
    paddingLeft: 10,
  },

  headingPopular: {
    color: '#070708ff',
    fontSize: 25,
    fontWeight: '700',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 8,
  },
  cards: {
    width: '45%',
    height: 300,
    margin: 10,
    backgroundColor: '#ffffffcc',
    borderRadius: 20,
    // alignSelf: 'center',
    // marginTop: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    elevation: 3,
    shadowColor: '#e6e2e2ff',
    padding: 6,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
  },
  cardsImg: {
    width: '100%',
    height: 180,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    // alignSelf: 'center',
    // resizeMode: 'cover',
    // marginTop: 10,
  },
  cardTitle: {
    color: '#070708ff',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
    //   marginLeft: 10,
    // marginBottom: 5,
    textAlign: 'center',
  },
  StarAndRatingView: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-between',
    marginRight: 10,
    alignItems: 'center',
    // marginTop: 25,
  },
});
