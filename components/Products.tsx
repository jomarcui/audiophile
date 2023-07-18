import Image, { StaticImageData } from 'next/image';

type ProductsProps = {
  products?: {
    description: string;
    imageSrc: StaticImageData;
    title: string;
  }[];
};

const Products = ({ products = [] }: ProductsProps) => (
  <section>
    <div
      className="container mx-auto"
      id="products"
      style={{ margin: '3rem auto' }}
    >
      <ul className="grid gap-4 grid-cols-3 grid-rows-0">
        {products.map(({ description, imageSrc, title }, index) => (
          <li key={index}>
            <div className="flex justify-center" style={{ margin: '1rem 0' }}>
              <Image alt={title} objectPosition="center" src={imageSrc} />
            </div>
            <h3 className="text-center text-xl" style={{ margin: '1rem 0' }}>
              {title}
            </h3>
            <p className="text-center" style={{ margin: '1rem 0' }}>
              {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Products;
