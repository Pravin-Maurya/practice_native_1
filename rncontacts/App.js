/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  Button,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
    {key: 9, item: 'Item 9'},
    {key: 10, item: 'Item 111'},
    {key: 12, item: 'Item 1125'},
    {key: 155, item: 'Item 1'},
    {key: 20, item: 'Item 2'},
    {key: 13, item: 'Item 3'},
    {key: 14, item: 'Item 4'},
    {key: 15, item: 'Item 5'},
    {key: 16, item: 'Item 6'},
    {key: 17, item: 'Item 7'},
    {key: 18, item: 'Item 8'},
    {key: 19, item: 'Item 9'},
    {key: 110, item: 'Item 111'},
    {key: 120, item: 'Item 1125'},
  ]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, {key: 211, item: 'Item 1125c'}]);
    setRefreshing(false);
  };
  // const [name, setName] = useState('Pravin');
  // const [count, setCount] = useState(0);
  // const handleState = () => {
  //   setName('Programming with pravin');
  // };
  // const increase = () => {
  //   setCount(count + 1);
  // };
  // const decrease = () => {
  //   setCount(count - 1);
  // };

  return (
    // <View style={styles.body}>
    //   <Text style={styles.text}>Welcome to React Native</Text>
    //   <Text style={styles.text}>{name}</Text>
    //   <Button title="click to change" onPress={handleState} />
    //   <Text style={styles.text}>{count}</Text>
    //   <View>
    //     <View style={styles.count}>
    //       <Button title="Increase Count" onPress={increase} />
    //     </View>
    //     <View style={styles.count}>
    //       <Button title="Decrease Count" onPress={decrease} />
    //     </View>
    //   </View>
    // </View>

    // practice-1
    // <View style={styles.view}>
    //   <View style={styles.viewInView}>
    //     <View style={styles.view1}>
    //       <Text style={{fontSize: 24}}>1</Text>
    //     </View>
    //     <View style={styles.view2}>
    //       <Text style={{fontSize: 24}}>2</Text>
    //     </View>
    //     <View style={styles.view3}>
    //       <Text style={{fontSize: 24}}>3</Text>
    //     </View>
    //   </View>
    //   <View style={styles.view1}>
    //     <Text style={{fontSize: 24}}>4</Text>
    //   </View>
    //   <View style={styles.view3}>
    //     <Text style={{fontSize: 24}}>5</Text>
    //   </View>
    // </View>

    // practice-2

    <ScrollView
      style={styles.scrollView}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#00ffff']}
        />
      }>
      <View style={styles.viewInScroll}>
        {items.map(object => {
          return (
            <View style={styles.items} key={object.key}>
              <Text style={{fontSize: 24}}>{object.item}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // body: {
  //   flex: 1,
  //   backgroundColor: '#0000ff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  // text: {
  //   color: '#ffffff',
  //   fontSize: 23,
  //   fontStyle: 'Italic',
  //   margin: 10,
  // },
  // count: {
  //   marginVertical: 8,
  //   borderBottomColor: 'red',
  //   // borderBottomWidth: StyleSheet.hairlineWidth,
  //   borderBottomWidth: 2,
  // },
  //
  view: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00ffff',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  viewInView: {
    flexDirection: 'row',
    alignItems: 'stretch',
    height: '20%',
  },
  view1: {
    flex: 1,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  items: {
    backgroundColor: '#ffffff',
    marginVertical: 20,
    alignItems: 'center',
    width: '90%',
    borderRadius: 5,
    borderColor: '#ff00ff',
    borderWidth: 1,
    fontSize: '10px',
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    backgroundColor: '#00ffff',
    // alignItems: 'center',
  },
  viewInScroll: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
