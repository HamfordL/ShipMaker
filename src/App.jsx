import React from 'react';
import { PageHeader, Steps } from 'antd';

import { APPLICATION_STEPS, INIT_APP_STATE as initState } from './constants';


function App() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [shippingLabel, setShippingLabel] = React.useState({ ...initState });

  const updateAppState = (newState) => {
    setShippingLabel({
      ...shippingLabel,
      ...newState,
    });
  };
  const resetAppState = () => {
    setCurrentStep(0)
    setShippingLabel({ ...initState })
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

<ComponentToRender currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            shippingLabel={shippingLabel}
            updateAppState={updateAppState}
            resetAppState={resetAppState}
            />
    </div>
  );
}

export default App;



  // display text how much the total is for 
  // shipping weight x ship option 1 or 2 * shipping rate 0.4
  // back button, confirm button (done)
  // display shipping cost