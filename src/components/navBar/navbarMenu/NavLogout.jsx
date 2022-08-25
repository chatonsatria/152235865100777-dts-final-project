const NavLogout = (props) => {
  return (
    <button
      onClick={props.wantLogout}
      className="inline-flex gap-x-3 items-center"
    >
      <p className="text-white">Logout</p>
    </button>
  );
};
export default NavLogout;
