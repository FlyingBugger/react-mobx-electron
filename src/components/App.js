import React, { Component } from 'react';
import { Button } from 'antd';

// 渲染进程可以通过`ipcRenderer`向主进程发送消息。
const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;

class App extends Component {
    render() {
        return (
            <div className="App">
                <Button type="primary" onClick={this.showNativeDialog}>Button</Button>
            </div>
        );
    }
    showNativeDialog() {
        // 选择文件示例
        // const dialog = electron.remote.dialog;
        // dialog.showOpenDialog({
        //     properties: ['openDirectory']
        // }, (filePaths)=>{
        //     console.log(filePaths);
        // });

        ipcRenderer.send('chooseFolder');
    }
}

export default App;
