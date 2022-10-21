import { Select, Button, Col, Form, Row, Space, Typography } from 'antd';
import React from 'react';

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const ShippingOptions = ({ updateAppState, currentStep, setCurrentStep }) => {
  const { Option } = Select;
  const [form] = Form.useForm();

  const handleSubmit = (value) => {
    updateAppState({ shippingOption: value });
    setCurrentStep(currentStep + 1);
  };
  const goBack = () => setCurrentStep(currentStep - 1);

  return (

    <Row align="middle" justify="center">
    <Col span={24}>
      <Typography.Title level={3}>Shipping Options</Typography.Title>
    </Col>

    <Col xs={24} sm={20} md={18} lg={16} xl={12}>
      <Form {...formLayout} form={form} name="shipping-options" onFinish={handleSubmit}>
        <Form.Item name="shippingOptions" label="Shipping Options">

    <Select
    >
      <Option value= {1}>Ground</Option>
      <Option value= {2}>Express</Option>
    </Select>
    </Form.Item>
    <Form.Item {...tailLayout}>
            <Space>
              <Button onClick={goBack}>Back</Button>
              <Button onClick={() => form.resetFields()}>Reset</Button>
              <Button type="primary" htmlType="submit">Next</Button>
            </Space>
          </Form.Item>
    </Form>
    </Col>
    </Row>
  );
};

  export default ShippingOptions;
