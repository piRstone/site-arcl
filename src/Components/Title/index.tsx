const Title = ({text}: {text: string}) => {
  return (
    <h2 className="text-3xl lg:text-5xl font-semibold text-center mx-auto mb-5">
      {text}
    </h2>
  );
};

export default Title;
