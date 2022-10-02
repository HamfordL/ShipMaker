import React from 'react';
import { PageHeader, Steps, Button } from 'antd';

import { APPLICATION_STEPS } from './constants';

function App() {
  const [currentStep, setCurrentStep] = React.useState(0);

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  console.log('currentStep: ', currentStep);

  const ComponentToRender = APPLICATION_STEPS[currentStep].content;

  return (
    <div>
      <PageHeader title="Shipping Label Maker" />

      <Steps current={currentStep}>
        {APPLICATION_STEPS.map(item => (
          <Steps.Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <ComponentToRender />

      <div>
        {currentStep < APPLICATION_STEPS.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {currentStep === APPLICATION_STEPS.length - 1 && (
          <Button type="primary">
            Done
          </Button>
        )}
        {currentStep > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}

export default App;
