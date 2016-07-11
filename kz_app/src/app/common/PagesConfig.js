/**
 * Created by weimeng on 16/4/25.
 * © 2016 NCF GROUP ALL RIGHTS RESERVED
 */

const confs =   {
  Home : {
    name : "Home",
    get Component() {return require("tabs/KeTabsView") }
  },
  
  Input : {
    name : "Input",  
    get Component() { return require("item/ItemInput")}
  },

  Memo : {
    name : "Memo",
    get Component() { return require("item/ItemMemo")}
  },
  
  Search : {
    name : "Search",  
    get Component() { return require("item/ItemSearch")}
  },
  
  TakePicture : {
    name : "TakePicture",
    get Component() { return require("common/TakePicture")}
  },
  Example1 : {
    name : "Example1",
    get Component() { return require("reactive/Example1")}
  },
  Example2 : {
    name : "Example2",
    get Component() { return require("reactive/Example2")}
  },
  Example3 : {
    name : "Example3",
    get Component() { return require("reactive/Example3")}
  },
  Example4 : {
    name : "Example4",
    get Component() { return require("reactive/Example4")}
  },
  Example5 : {
    name : "Example5",
    get Component() { return require("reactive/Example5")}
  },

  Example6 : {
    name : "Example6",
    get Component() { return require("reactive/Example6")}
  }
}
confs.initial = confs.Home
export const PagesConfig = confs
