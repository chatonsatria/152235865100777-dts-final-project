import { useMatch, useResolvedPath, Link } from "react-router-dom";

const CustomSideMainLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);

  let match = useMatch({ path: `${resolved.pathname}/*`, end: true });

  return (
    <div>
      <Link to={to} {...props}>
        <div
          className={
            match
              ? "text-xl font-bold text-slate-400"
              : "text-xl font-bold text-white"
          }
        >
          {children}
        </div>
      </Link>
    </div>
  );
};

export default CustomSideMainLink;
