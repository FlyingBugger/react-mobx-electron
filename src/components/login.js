import React from 'react';
import { observer, inject } from 'mobx-react';
@inject('store')
@observer
class Login extends React.Component {

  render(){
    const {store}=this.props;
    store.changeTag();
    return(
      <div>
        <div>{store.tag}</div>
      </div>
    )
  }
}
export default Login;
