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


function getDeliveryCost(weight , shippingOption){
  const cost = weight * (shippingOption === 'ground' ? 1 : 2 ) * 0.40;
return `$ ${cost.toFixed(2)}`
}

const ReviewConfirm = ({shippingLabel, resetAppState, setCurrentStep, currentStep

})=>{
     const goBack = () => setCurrentStep(currentStep - 1);
     const handleConfirm = () => resetAppState ();

     return (
      
      <Row align="middle" justify="center">git
      <Col span={24}>
        <Typography.Title level={3}>Confirmation</Typography.Title>
      </Col>

        <Col xs={24} sm={20} md={18} lg={16} xl={12}>
        <pre style={style}><code>{JSON.stringify(shippingLabel, null, 4)}</code></pre>
        <Typography.Title level={5}>Total Shipping cost is {getDeliveryCost(shippingLabel.weight, shippingLabel.shippingOption)}</Typography.Title>

                <Space>
                  <Button onClick={goBack}>Back</Button>
                  <Button type="primary" onClick={handleConfirm}>Confirm</Button>
                </Space>
         
      </Col>
    </Row>
   
    
);

     }





   

  export default ReviewConfirm;
