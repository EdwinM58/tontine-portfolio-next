const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <section className={` bg-yellow-100 `}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </section>
    );
  };

export default SectionWrapper;
