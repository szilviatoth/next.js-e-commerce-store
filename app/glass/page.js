import '../singleProduct.module.scss';
import Image from 'next/image';
import AddItemButton from '../AddItemButton';

export const metadata = {
  title: 'Art deco set',
  description:
    'Welcome to Saneha, where the finest ingredients of Thailand blend gracefully with local tradition, symbolism, culture and values.',
};

export default function HighballPage() {
  return (
    <div>
      <h1 data-test-id="product-name">Vintage Art Deco Highball Glasses</h1>
      <p>Vintage Art Deco 1920s' | Set of 4 </p>
      <Image
        src="/glass.jpg"
        alt="highballglasses"
        width={650}
        height={490}
        data-test-id="product-image"/>
      <div className="product-price"         data-test-id="product-price">
        79 €
       <AddItemButton />
      </div>
    </div>
  );
}
