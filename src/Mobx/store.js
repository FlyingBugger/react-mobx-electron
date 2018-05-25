import { observable, computed, action } from 'mobx';
import { message } from 'antd';

class AppStore {
  @observable tag=0;
  @action changeTag(){
    this.tag=13;
  }
  @computed get tagAdd(){
    return this.tag++;
  }
}
export default AppStore;
