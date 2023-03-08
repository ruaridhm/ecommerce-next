interface IBanner {
  text: string;
}

const Banner = ({ text }: IBanner) => {
  return <div className="bg-slate-700 text-white text-center py-3">{text}</div>;
};

export default Banner;
