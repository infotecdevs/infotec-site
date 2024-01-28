const Experience = () => {
  return (
    <div className="text-violet-950 py-14">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3">
          {/* first col */}
          <div className="bg-orange p-4 grid place-items-center">
            <div className="text-center space-y-3">
              <h1 className="text-5xl font-bold">12</h1>
              <p className="text-xl font-semibold">Anos de Experiência</p>
            </div>
          </div>
          {/* second col */}
          <div className="grid grid-rows-2 gap-4">
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">60+</h1>
              <p>Clientes Satisfeitos</p>
            </div>
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">120+</h1>
              <p>Projetos Completos</p>
            </div>
          </div>
          {/* Third col */}
          <div className="grid grid-rows-2 gap-4">
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">60+</h1>
              <p>Clientes Satisfeitos</p>
            </div>
            <div className="text-center p-6 bg-dark">
              <h1 className="text-3xl font-bold">120+</h1>
              <p>Projetos Completos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
