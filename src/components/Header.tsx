const PageHeader = ({ clickHandler, hideJosef }: any) => {
  return (
    <div className="text-center page-header mt-4 ">
      {/* <div className="help neon neon-yellow">
        <a href="mailto: hazaraskari@gmail.com">
          We can help you set up your very own
        </a>
      </div> */}
      <a href="home">
        <h1 className="mb-4 neon neon-header neon-teal" data-text="U">
          The W<span className="flicker-slow t">a</span>rzone R
          <span className="flicker-fast">e</span>po
          <span className="flicker-very-slow">r</span>t
        </h1>
      </a>
      <div className="help">
        <a className="neon-button" onClick={clickHandler}>
          {hideJosef ? (
            <>
              <span className="neon neon-teal">Show</span>
              <span className="neon neon-yellow"> Josef</span>
              <span className="neon neon-red"> in</span>
              <span className="neon neon-green"> weekly</span>
            </>
          ) : (
            <>
              <span className="neon neon-green">Hide</span>
              <span className="neon neon-red"> Josef</span>
              <span className="neon neon-teal"> from</span>
              <span className="neon neon-yellow"> weekly</span>
            </>
          )}
        </a>
      </div>
    </div>
  );
};

export default PageHeader;
