const Container = ({ children, className }) => {
  return <div className={`container mx-auto w-1/2 align-middle ${className}`}>{children}</div>
};

export default Container;