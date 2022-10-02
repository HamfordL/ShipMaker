import SenderAddress from './components/sender-address';
import ReceiverAddress from './components/receiver-address';
import PackageWeight from './components/package-weight';
import ShippingOptions from './components/shipping-options';
import ReviewConfirm from './components/review-confirm';

export const APPLICATION_STEPS = [
  { title: "Sender's Address", content: SenderAddress },
  { title: "Receiver's Address", content: ReceiverAddress },
  { title: "Package Weight", content: PackageWeight },
  { title: "Shipping Option", content: ShippingOptions },
  { title: "Review and Confirm", content: ReviewConfirm },
];
