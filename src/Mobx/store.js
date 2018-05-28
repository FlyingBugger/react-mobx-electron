import { observable, computed, action } from 'mobx';
import { message } from 'antd';

class AppStore {
  @observable tag=0;
  @action changeTag(){
    this.tag++;
  }
  @computed get tagAdd(){
    return this.tag+=1;
  }
}
export default AppStore;
