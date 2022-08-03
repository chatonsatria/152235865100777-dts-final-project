import { useMatch, useResolvedPath, Link } from "react-router-dom";

const CustomSideSubLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);

  let match = useMatch({ path: `${resolved.pathname}/*`, end: true });

  return (
    <div>
      <Link to={to} {...props}>
        <div
          className={
            match
              ? "text-base font-semibold text-slate-400 transition-all"
              : "text-base font-semibold text-white hover:text-slate-400 transition-all"
          }
        >
          {children}
        </div>
      </Link>
    </div>
  );
};

export default CustomSideSubLink;
