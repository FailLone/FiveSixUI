import React, { Component, PropTypes} from 'react';
import { Crumb, ImageModal, SearchPeriod, Show, TimeRangePicker,Select } from 'fivesix';
import { Button } from 'antd';
import moment from 'moment';

export default class Homepage extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            selectValue: ['today'],
        };
    }
    changeValue(value) {
        this.setState({
            selectValue: value,
        });
    }
    render() {
        return (
            <div style={{height: 800}}>
                <Crumb
                    data = {[{title: '骑士管理', link: 'www.baidu.com'},{title: '装备管理'}]}
                />
                <ImageModal>
                    <img src="http://yizhan.baidu.com/static/logisticsfrontend/images/sound_d165ad8.png" />
                </ImageModal>
                <ImageModal 
                    src='http://yizhan.baidu.com/static/logisticsfrontend/images/sound_d165ad8.png' 
                    onOpen = {()=> {console.log('222');}}

                >
                    点我点我
                </ImageModal>
                <SearchPeriod/>
                <Show
                    isShow = { false }
                    isInline = { true }
                    isDelay = { false }
                >
                    <Button>测试</Button>
                </Show>
                <Button>测试</Button>
                <div style={{position: 'absolute', left: 50}}>
                    <TimeRangePicker />
                </div>
                <Select
                    data={[{text: '今天',value: 'today'},{text: '昨天',value: 'yesterday'},{text: '明天',value: 'tomorrow'}]} 
                    value={this.state.selectValue} 
                    onChange={this.changeValue.bind(this)} 
                    showSearch={true} 
                    showAll={true} 
                    allowClear={true} 
                    style={{position: 'absolute', top: 400}} 
                    multiple = {true}
                   
                ></Select>
            </div>
        )
        
    }
}