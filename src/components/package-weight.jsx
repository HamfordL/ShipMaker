import { Row, Col, Typography, Form, Input, Space, Button } from 'antd';

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const PackageWeight = (props) => {
  const { currentStep, setCurrentStep, updateAppState } = props;
  const handleSubmit = (formValues) => {
    updateAppState({ weight: formValues.weight });
    setCurrentStep(currentStep + 1);
  };

  const goBack = () => setCurrentStep(currentStep - 1);

  return (
    <Row align='middle' justify='center'>
      <Col span={24}>
        <Typography.Title level={3}>
          Enter Package Weight (in grams):
        </Typography.Title>
      </Col>

      <Col xs={24} sm={20} md={18} lg={16} xl={12}>
        <Form {...formLayout} name="package-weight" onFinish={handleSubmit}>
          <Form.Item name="weight" label="Package Weight (g)">
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Space>
              <Button onClick={goBack}>Back</Button>
              <Button type="primary" htmlType='submit'>Next</Button>
            </Space>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default PackageWeight;
