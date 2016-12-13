/**
 * 此页面主要用于测试组件在antd的form中的使用，包括get&set
 */
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { TimeRangePicker, UserPassWordInput, AreaSelect, tools } from 'fivesix';
import { Form, Button } from 'antd';

const FormItem = Form.Item;

class TestForm extends Component {
    handleSubmit() {
        let result = this.props.form.getFieldsValue();
        console.log(result);
        console.log(tools.formfieldsValidte(this.props.form, (msg) => console.log(msg)));
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <div style={{ marginLeft: 30, marginTop: 30 }}>
            <Form horizontal>
              <FormItem
                label="生成时间"
              >
                {getFieldDecorator('timePicker', {
                    initialValue: { start: moment().startOf('day'), end: moment() }
                })(
                  <TimeRangePicker
                    ordered={false}
                  />
                            )}
              </FormItem>
              <FormItem>
                <UserPassWordInput 
                    form = { this.props.form }
                    name = 'password'
                    initialValue = { '1234555' }
                    defaultRules = { true }
                />
              </FormItem>
              <FormItem>
                <Button onClick={(event) => this.handleSubmit(event)}>提交</Button>
              </FormItem>
            </Form>
          </div>
        );
    }
}
export default Form.create()(TestForm);
