import { Row, Col, Typography, Form, Space, Button } from 'antd';
import React from 'react';
import ShippingOptions from './shipping-options';

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const style = {
  backgroundColor: '#ededed',
  border: '1px solid black',
  padding: '1rem'
};

const ground = 0;
const express = 0;
const total = ground * 1 * 0.4;
const Total = express * 2 * 0.4;
const deliveryCost = 0;
function deliveryCost(total , Total , express , ground){}

<ComponentToRender if deliveryCost = {total + ground}
        ;  deliveryCost = {Total + express}
   
      const ReviewConfirm = ({shippingLabel, currentStep, setCurrentStep, updateAppState}) => {
      const [form] = Form.useForm();

    const handleSubmit = (formValues) => {
      updateAppState({ ReviewConfirm: formValues });
   
    const goBack = () => setCurrentStep(currentStep - 1);


    return (
      
      <pre style={style}><code>{JSON.stringify(shippingLabel, null, 4)}</code>



      <Row align="middle" justify="center">
      <Col span={24}>
        <Typography.Title level={3}>Confirmation</Typography.Title>
      </Col>

        <Col xs={24} sm={20} md={18} lg={16} xl={12}>
          <Form {...formLayout} form={form} name="review-confirm" onFinish={handleSubmit}>
           <Form.Item name="ReviewConfirm" label="Please verify your information.">

          </Form.Item>
    
            <Form.Item {...tailLayout}>
                 <Space>
                  <Button onClick={goBack}>Back</Button>
                  <Button type="primary" htmlType="submit">Confirm</Button>
                </Space>
           </Form.Item>
         </Form>
      </Col>
    </Row>

    </pre>
    
>
            );
      };
};
  
   

      

  export default ReviewConfirm;
