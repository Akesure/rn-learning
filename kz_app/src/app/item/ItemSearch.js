/**
 * Created by weimeng on 16/6/12.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */


import React, { Component }  from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TextInput,
  ListView,
  ScrollView
} from 'react-native'


import {
  W,
  H,
  TitleBarHeight,
  borderColor,
  getResponsiveSize,
  lightGrey,
  orange ,
  blue,
  BackButton, 
  Title
} from 'common/index'

import { connect } from 'react-redux'

import {ItemCard} from "./ItemCard"

import RefreshableListView from 'react-native-refreshable-listview'

const TITLE_BAR_HEIGHT = 44

class ItemSearch extends Component{
  constructor(){
    super()
    this._focus = this._focus.bind(this)
    this._blur = this._blur.bind(this)
  }


  _focus() {

  }

  _blur() {

  }
  render(){
    return <View>

      <SearchTitleBar
        onFocus={this._focus}
        onBlur={this._blur}
      />
    </View>
  }
}


class SearchTitleBar extends Component {

  constructor(){
    super()




    const raw = [
      {
        id : 1,
        name:"农业银行卡",
        time:"2016-06-15 20:38:28",
        image:'http://www.shiwurenling.com/data/attachment/forum/201606/08/174936ltz1m4myy6vnii6e.jpg',
        position:"北京南站",
        status:1,
      },
      {
        id : 2,
        name:"农业银行卡",
        time:"2016-06-15 20:38:28",
        image:'http://www.shiwurenling.com/data/attachment/forum/201606/08/174936ltz1m4myy6vnii6e.jpg',
        position:"北京南站",
        status:1,
      },{
        id : 3,
        name:"农业银行卡",
        time:"2016-06-15 20:38:28",
        image:'http://www.shiwurenling.com/data/attachment/forum/201606/08/174936ltz1m4myy6vnii6e.jpg',
        position:"北京南站",
        status:1,
      },{
        id : 4,
        name:"农业银行卡",
        time:"2016-06-15 20:38:28",
        image:'http://www.shiwurenling.com/data/attachment/forum/201606/08/174936ltz1m4myy6vnii6e.jpg',
        position:"北京南站",
        status:1,
      },{
        id :5,
        name:"农业银行卡",
        time:"2016-06-15 20:38:28",
        image:'http://www.shiwurenling.com/data/attachment/forum/201606/08/174936ltz1m4myy6vnii6e.jpg',
        position:"北京南站",
        status:1,
      },{
        id : 6,
        name:"农业银行卡",
        time:"2016-06-15 20:38:28",
        image:'http://www.shiwurenling.com/data/attachment/forum/201606/08/174936ltz1m4myy6vnii6e.jpg',
        position:"北京南站",
        status:1,
      },{
        id : 7,
        name:"农业银行卡",
        time:"2016-06-15 20:38:28",
        image:'http://www.shiwurenling.com/data/attachment/forum/201606/08/174936ltz1m4myy6vnii6e.jpg',
        position:"北京南站",
        status:1,
      },{
        id : 8,
        name:"农业银行卡",
        time:"2016-06-15 20:38:28",
        image:'http://www.shiwurenling.com/data/attachment/forum/201606/08/174936ltz1m4myy6vnii6e.jpg',
        position:"北京南站",
        status:1,
      },{
        id : 9,
        name:"农业银行卡",
        time:"2016-06-15 20:38:28",
        image:'http://www.shiwurenling.com/data/attachment/forum/201606/08/174936ltz1m4myy6vnii6e.jpg',
        position:"北京南站",
        status:1,
      },
    ];

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      ds : ds.cloneWithRows(raw)
    }

  }

  renderRow (data) {
    return (
      <ItemCard
        {...data}
        containerStyle={{marginTop : 10}}
      />
    )
  }

  load(){
    
  }

  render () {

    const {onFocus, onBlur} = this.props
    const left = <BackButton />
    return (
      <View>


        <RefreshableListView
          dataSource={this.state.ds}
          renderRow={this.renderRow}
          style={styles.list}
          loadData={this.load}
          refreshDescription="正在刷新列表"
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    backgroundColor : "white",
    height : Platform.OS === 'ios' ? TITLE_BAR_HEIGHT + 20 : TITLE_BAR_HEIGHT,
    paddingTop : Platform.OS === "ios" ? 20 : 0,
    flexDirection : "row" ,
    alignItems:'center',
    borderBottomWidth:1,
    borderBottomColor:borderColor
  },
  leftIcon : {
    backgroundColor : "white",
    width : 50,
    alignItems:'center',
  },
  searchContainer: {
    flex : 1,
    alignItems:'center',
    borderWidth : 1,
    borderRadius : 15,

    borderColor : lightGrey,
  },
  titleText : {
    fontSize : getResponsiveSize(15),
  },
  right: {
    alignItems : 'center',
    justifyContent : 'center',
    width : 40
  },
  input : {
    height : 30,
    paddingLeft: 20,
    fontSize : 12
  },
  list : {
    flex : 1,
    height : H - TitleBarHeight
  }
})


const __module = connect()(ItemSearch)

__module.TitleBar = {
  LeftButton : <BackButton />,
  Title : <Title>清单</Title>
  
}
module.exports = __module
