import { useMatch, useResolvedPath, Link } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);

  let match = useMatch({ path: `${resolved.pathname}/*`, end: true });

  return (
    <div>
      <Link to={to} {...props}>
        <div
          className={
            match ? "text-base text-white" : "text-base text-slate-300"
          }
        >
          {children}
        </div>
      </Link>
    </div>
  );
};

export default CustomLink;
