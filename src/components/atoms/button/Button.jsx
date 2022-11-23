const Button = ({ children, href, onClick }) => {
  if (!href) return <button onClick={onClick}>{children}</button>;
  return <a href={href}>{children}</a>;
};

export default Button;
