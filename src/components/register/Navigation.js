const NavigationRegister = ({ setValue }) => {
    return (
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p onClick={(e) => setValue("")} className="link">
          Home
        </p>
        <p onClick={(e) => setValue("register")} className="link">
          Cadastro 
        </p>
        <p onClick={(e) => setValue("search")} className="link">
          Consulta
        </p>
        <p onClick={(e) => setValue("orders")} className="link">
          Pedidos
        </p>
        <p onClick={(e) => setValue("logs")} className="link">
          Logs
        </p>
      </div>
    );
  };
  
  export default NavigationRegister;
  