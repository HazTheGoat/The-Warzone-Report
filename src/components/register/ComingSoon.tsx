const PlaceholderComingSoon = () => {
  return (
    <div className="text-center page-header mt-4 ">
      <h1 className="mb-4 mt-3 neon neon-header neon-teal" data-text="U">
        COMI<span className="flicker-slow t">N</span>G <br></br>
        <span className="flicker-very-slow">S</span>O
        <span className="flicker-fast">O</span>N
        <span className="flicker-very-slow"></span>
      </h1>

      <div className="mt-5">
        <h1 className="neon neon-contact neon-blue">
          <a href="mailto: hazaraskari@gmail.com">
            LIKE WHAT YOU SEE? <br></br>GET IN
            <span className="flicker-fast"> TOUCH</span>
          </a>
        </h1>
      </div>
      <a href="/">
        <h4 className="mt-5 neon neon-sub-header neon-red flicker-fast">
          HEAD BACK
        </h4>
      </a>
    </div>
  );
};

export default PlaceholderComingSoon;
