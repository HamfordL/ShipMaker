import { Button, Col, Form, Input, Row, Space, Typography } from "antd";

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const SenderAddress = ({ updateAppState, currentStep, setCurrentStep }) => {
  const [form] = Form.useForm();

  const handleSubmit = (formValues) => {
    updateAppState({ from: formValues });
    setCurrentStep(currentStep + 1);
  };

  const goBack = () => setCurrentStep(currentStep - 1);

  return (
    <Row align="middle" justify="center">
      <Col span={24}>
        <Typography.Title level={3}>Sender's Address</Typography.Title>
      </Col>

      <Col xs={24} sm={20} md={18} lg={16} xl={12}>
        <Form {...formLayout} form={form} name="sender-address" onFinish={handleSubmit}>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>

          <Form.Item name="zipCode" label="Zip Code">
            <Input />
          </Form.Item>

          <Form.Item name="state" label="State">
            <Input />
          </Form.Item>

          <Form.Item name="city" label="City">
            <Input />
          </Form.Item>

          <Form.Item name="address" label="Address">
            <Input />
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

export default SenderAddress;
