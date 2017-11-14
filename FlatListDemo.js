import React, { Component ,PureComponent} from "react";
import { StyleSheet,View, Text, FlatList, ActivityIndicator,Image,Dimensions} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import FastImage from 'react-native-fast-image';
import MasonryList from '@appandflow/masonry-list';
import LinearGradient from 'react-native-linear-gradient';
import _ from 'lodash';
const uuidv4 = require('uuid/v4');
const { height, width } = Dimensions.get('window');

// list of images
let data = [
  {
    uri: 'https://s-media-cache-ak0.pinimg.com/736x/b1/21/df/b121df29b41b771d6610dba71834e512.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpD8mz-2Wwix8hHbGgR-mCFQVFTF7TF7hU05BxwLVO1PS5j-rZA',
    caption:"this is test",
  },
  {
    uri: 'https://s-media-cache-ak0.pinimg.com/736x/5a/15/0c/5a150cf9d5a825c8b5871eefbeda8d14.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://s-media-cache-ak0.pinimg.com/736x/04/63/3f/04633fcc08f9d405064391bd80cb0828.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRWkuUMpLyu3QnFu5Xsi_7SpbabzRtSis-_QhKas6Oyj3neJoeug',
    caption:"this is test",
  },
  {
    uri: 'https://s-media-cache-ak0.pinimg.com/736x/a5/c9/43/a5c943e02b1c43b5cf7d5a4b1efdcabb.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://i0.wp.com/www.youbodyhealth.com/wp-content/uploads/2016/08/Delicious-Foods-can-Harm-Your-Brain.jpg?',
    caption:"this is test",
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/29/15/campaign_images/buzzfeed-prod-fastlane-03/26-delicious-korean-foods-you-need-in-your-life-2-30138-1490814365-13_dblbig.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://pbs.twimg.com/media/B59AOmICQAAiGGj.png',
    caption:"this is test",
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2013-12/enhanced/webdr05/17/17/enhanced-buzz-orig-2548-1387320822-8.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/17/15/enhanced/webdr13/enhanced-6527-1426620797-18.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-12/1/15/enhanced/webdr02/enhanced-18393-1417466529-5.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXTmdaGSOFK8iBeYqoA6_XiQGGWvu6KGnqAxXYyvJA-JKin8ImQ',
    caption:"this is test",
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-04/3/15/enhanced/webdr06/enhanced-24427-1428089292-2.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-12/28/12/asset/buzzfeed-prod-web-09/sub-buzz-24236-1482944714-1.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-03/7/17/enhanced/webdr08/enhanced-buzz-8155-1457391039-5.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/30/12/asset/buzzfeed-prod-fastlane-01/sub-buzz-24597-1490890739-1.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/14/20/campaign_images/webdr15/which-delicious-mexican-food-item-are-you-based-o-2-20324-1452822970-1_dblbig.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-11/30/10/enhanced/webdr15/enhanced-18265-1448896942-17.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-12/30/16/enhanced/webdr04/enhanced-15965-1451509932-6.jpg',
    caption:"this is test",
  }
];
const addData = [
  {
    uri: 'https://i.pinimg.com/736x/48/ee/51/48ee519a1768245ce273363f5bf05f30--kaylaitsines-dipping-sauces.jpg',
    caption:"this is test",
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGYfU5N8lsJepQyoAigiijX8bcdpahei_XqRWBzZLbxcsuqtiH',
    caption:"this is test",
  },
  {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPL2GTXDuOzwuX5X7Mgwc3Vc9ZIhiMmZUhp3s1wg0oHPzSP7qC',
    caption:"this is test",
  }
];
const generateKey = (pre) => {
  return `${ pre }_${ new Date().getTime() }`;
}
class Cell extends PureComponent {
  componentDidMount() {
    //console.warn('mount cell');
  }

  componentWillUnmount() {
    //console.warn('unmount cell');
  }

  render() {
    const { item } = this.props;
    return (
      <View style={{marginHorizontal:5}}>    
        <FastImage
          style={{ height: item.height }}
              source={{
                uri:  item.uri,
                headers:{ Authorization: 'someAuthToken' },
                priority: FastImage.priority.high,
              }}
           resizeMode={FastImage.resizeMode.cover   }
        > 
        <LinearGradient  colors={["transparent", "white"]} 
        locations={[0.4,1.2]} style={styles.linearGradient}>
          <View style = {styles.itemtextArea}>
          <View style={styles.itembackdropView}>
            <Text style={styles.itemNameline}>{ item.caption}</Text>
          </View>
          </View>
            
        </LinearGradient>
        </FastImage>
      </View>
    );
  }
}
class FlatListDemo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],    
      error: null,
      refreshing: false
    };
  }
  componentDidMount() {
    this.makeRemoteRequest();
  }
  makeRemoteRequest = () => {
    const appendedData = [...data, ...addData];    
    _.map(appendedData, function(e, i) {
      height = Math.round(Math.random() * 100 + 100);      
      // Image.getSize(e.uri, (width, height) => {
      //   console.log("width:  " + width + "/  height:  " + height);
      // });
      return _.extend(e, {index: uuidv4(),height: height});
      //generate unique key, it is necessary to test only.
    });
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({     
        loading: false,
        refreshing: false,
        //data: appendedData
       data: [...this.state.data, ...appendedData]        
       });
    }, 2000);  
  };
  handleRefresh = () => {
    this.setState(
      {       
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };
  handleLoadMore = () => {
    this.setState(
      {       
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 10,          
          backgroundColor: "#FFFFFF",
         
        }}
      />
    );
  };
  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  //          onEndReached={this.handleLoadMore}:)
  render() {
    return (
      <View style={{flexGrow:1, backgroundColor:'white'}}>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <MasonryList
            data={this.state.data}
            renderItem={({ item }) => (
              <Cell item={item}/>
            )}
            keyExtractor={item => item.index}          
            ItemSeparatorComponent={this.renderSeparator}       
            onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            onEndReachedThreshold={5}
            getHeightForItem={({ item }) => item.height + 2}
            numColumns={3}
          />
        </List>
      
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  gradient: {
    width: 200,
    height: 200,
  },
  linearGradient: {
    flex: 1,
  },
  itemtextArea: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  itembackdropView: {
    height: 25,
    backgroundColor: 'rgba(0,0,0,0.0)',
  },
  itemNameline: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});
export default FlatListDemo;
