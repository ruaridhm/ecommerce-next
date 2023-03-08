import CollectionItem from "./CollectionItem";

export interface IProduct {
  id: number;
  image: string;
  title: string;
  price: number;
}

interface ICollection {
  title?: string;
  subTitle?: string;
  items: IProduct[];
}

const CollectionRow = ({ title, subTitle, items }: ICollection) => {
  return (
    <div>
      {title && <h2 className="text-center text-lg font-bold">{title}</h2>}
      {subTitle && <p className="text-center text-md">{subTitle}</p>}
      <div className="flex justify-center flex-wrap mt-4">
        {items.map((item, key) => {
          // eslint-disable-next-line react/jsx-key
          return (
            <CollectionItem
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CollectionRow;
