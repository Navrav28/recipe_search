import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import TypeWriter from 'react-native-typewriter';

const Home = ({ navigation }) => {
  const menuItems = [
    // Popular
    {
      id: 1,
      name: 'Margherita Pizza',
      category: 'Popular',
      price: 299,
      image: require('../images/fire.png'),
      imageCards: require('../images/pizza.jpg'),

      description: 'Classic cheese and tomato pizza with fresh basil.',
    },

    // Western
    {
      id: 3,
      name: 'Pasta Alfredo',
      category: 'Western',
      price: 349,
      image: require('../images/pizza.png'),
      imageCards: require('../images/pasta.jpg'),

      description: 'Creamy Alfredo pasta with parmesan cheese.',
    },

    // Drinks
    {
      id: 5,
      name: 'Cold Coffee',
      category: 'Drinks',
      price: 120,
      image: require('../images/soft-drink.png'),
      imageCards: require('../images/coldCofee.jpg'),
      description: 'Refreshing cold coffee with ice cream topping.',
    },

    // Dessert
    {
      id: 7,
      name: 'Chocolate Brownie',
      category: 'Dessert',
      price: 180,
      image: require('../images/cake.png'),
      imageCards: require('../images/chocolate.jpeg'),
      description: 'Rich chocolate brownie served with vanilla ice cream.',
    },

    // Indian
    // {
    //   id: 9,
    //   name: 'Paneer Butter Masala',
    //   category: 'Indian',
    //   price: 250,
    //   image: 'https://picsum.photos/200/200?paneer',
    //   description: 'Rich and creamy paneer curry with butter and spices.',
    // },

    // // Chinese
    // {
    //   id: 11,
    //   name: 'Veg Hakka Noodles',
    //   category: 'Chinese',
    //   price: 220,
    //   image: 'https://picsum.photos/200/200?noodles',
    //   description: 'Stir-fried noodles with vegetables and soy sauce.',
    // },

    // // Italian
    // {
    //   id: 13,
    //   name: 'Lasagna',
    //   category: 'Italian',
    //   price: 400,
    //   image: 'https://picsum.photos/200/200?lasagna',
    //   description: 'Layered pasta with cheese, veggies, and tomato sauce.',
    // },

    // Snacks
    {
      id: 15,
      name: 'French Fries',
      category: 'Snacks',
      price: 99,
      image: require('../images/snacks.png'),
      imageCards: require('../images/frenchFries.jpg'),
      description: 'Crispy golden fries served with ketchup.',
    },

    // // Seafood
    // {
    //   id: 17,
    //   name: 'Grilled Salmon',
    //   category: 'Seafood',
    //   price: 600,
    //   image: 'https://picsum.photos/200/200?salmon',
    //   description: 'Fresh salmon grilled with herbs and lemon.',
    // },
    // {
    //   id: 18,
    //   name: 'Prawn Curry',
    //   category: 'Seafood',
    //   price: 550,
    //   image: 'https://picsum.photos/200/200?prawn',
    //   description: 'Delicious prawns cooked in spicy coconut curry.',
    // },
  ];

  return (
    <View style={styles.container}>
      {/* THIS IS A LINEAR GRADIENT BACKGROUND */}
      <LinearGradient style={styles.container} colors={['#3eb489', '#90EE90']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          {/* THIS IS A PROFILE AND NOTIFICATION ICONS */}
          <View style={styles.profilAndNoti}>
            <Image
              style={styles.profilAndNotiImg}
              source={require('../images/boy.png')}
            />
            <Image
              style={[styles.profilAndNotiImg, { tintColor: '#070708ff' }]}
              source={require('../images/notification.png')}
            />
          </View>
          <View>
            <Text style={styles.username}>{`Hello, Mohit!`}</Text>
          </View>
          {/* THIS IS A TYPEWRITER EFFECT */}
          <View style={{ marginLeft: 20, height: 100 }}>
            <TypeWriter typing={1} maxDelay={100}>
              <Text style={styles.title}>
                {`Buy your favorite food ,\nand eat it at `}
                <Text style={styles.titleHighlight}>{`home!`}</Text>
              </Text>
            </TypeWriter>
          </View>
          {/* THIS IS A SEARCH BAR */}
          <TouchableOpacity
            style={styles.searchView}
            onPress={() => navigation.navigate('Search')}
          >
            {/* <TextInput
              style={styles.searchInput}
              placeholder="Search for recipes..."
            /> */}
            <Text
              style={{
                color: '#79797dff',
                fontSize: 20,
                fontWeight: '500',
                marginLeft: 10,
              }}
            >
              Search for recipes...
            </Text>
            {/* <TouchableOpacity>
              <Image
                style={[
                  styles.profilAndNotiImg,
                  { tintColor: '#79797dff', height: 34 },
                ]}
                source={require('../images/search.png')}
              />
            </TouchableOpacity> */}
          </TouchableOpacity>
          <View>
            <FlatList
              contentContainerStyle={{ paddingRight: 15 }}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={menuItems}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.categgoryBtn}>
                  <Image
                    source={item.image}
                    style={{ width: 50, height: 50, tintColor: '#070708ff' }}
                  />
                  <Text
                    style={{
                      color: '#070708ff',
                      fontSize: 15,
                      fontWeight: '500',
                      marginTop: 5,
                    }}
                  >
                    {item.category}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <Text style={styles.headingPopular}>Popular Dishes</Text>
          {/* this is a FlatList for popular dishes */}
          <View>
            <FlatList
              numColumns={2}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 30 }}
              data={menuItems}
              renderItem={({ item, index }) => (
                <TouchableOpacity style={styles.cards}>
                  <Image source={item.imageCards} style={styles.cardsImg} />
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <View style={styles.StarAndRatingView}>
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
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  },
  // searchInput: {
  //   width: '100%',
  //   fontSize: 20,
  //   height: 70,
  //   backgroundColor: '#ffffffcc',
  //   borderRadius: 20,
  //   paddingLeft: 10,
  // },
  categgoryBtn: {
    width: 90,
    height: 90,
    marginLeft: 14,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffffcc',
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#e6e2e2ff',
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
    height: 265,
    margin: 10,
    backgroundColor: '#ffffffcc',
    borderRadius: 20,
    alignSelf: 'center',
    // marginTop: 20,
    // justifyContent: 'center',
    // alignItems: 'center',
    elevation: 2,
    shadowColor: '#e6e2e2ff',
    padding:7
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
  },
  cardsImg: {
    width: '100%',
    height: 160,
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    alignSelf: 'center',
    resizeMode: 'cover',
    // marginTop: 10,
  },
  cardTitle: {
    color: '#070708ff',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 10,
  },
  StarAndRatingView: {
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-between',
    marginRight: 10,
    alignItems: 'center',
    marginTop: 25,
  },
});
