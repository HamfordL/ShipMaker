import React from 'react';
import { PageHeader, Steps } from 'antd';

import { APPLICATION_STEPS, INIT_APP_STATE as initState } from './constants';
import PackageWeight from './components/package-weight';
import SenderAddress from './components/sender-address';
import ReceiverAddress from './components/receiver-address';

function App() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [shippingLabel, setShippingLabel] = React.useState({ ...initState });

  const updateAppState = (newState) => {
    setShippingLabel({
      ...shippingLabel,
      ...newState,
    });
  };

  console.log('my new state is: ', shippingLabel)
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

      {currentStep === 0
        ? <SenderAddress
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            updateAppState={updateAppState}
          />
        : <PackageWeight
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            updateAppState={updateAppState}
          />
      }
    </div>
  );
}

export default App;
