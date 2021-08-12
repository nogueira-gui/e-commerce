const Categories = ({ setValue }) => {
  return (
    <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
      <p onClick={(e) => setValue("")} className="link">
        Todos
      </p>
      <p onClick={(e) => setValue("men's clothing")} className="link">
        Masculino
      </p>
      <p onClick={(e) => setValue("women's clothing")} className="link">
        Feminino
      </p>
      <p onClick={(e) => setValue("jewelery")} className="link">
        Joias
      </p>
      <p onClick={(e) => setValue("vestido")} className="link">
        Vestidos
      </p>
      <p onClick={(e) => setValue("body")} className="link">
        Body
      </p>
    </div>
  );
};

export default Categories;
