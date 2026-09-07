import { useAppStore } from "../store/appStore";

const NavBar = () => {
  const user = useAppStore((state) => state.user);
  const theme = useAppStore((state) => state.theme);
  const logout = useAppStore((state) => state.logout);
  const login = useAppStore((state) => state.login);
  const toggleTheme = useAppStore((state) => state.toggleTheme);

  return (
    <nav>
      <span>Theme: {theme}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {user ? (
        <>
          <span>Hi, {user.name}</span>
          <button onClick={logout}>LogOut</button>
        </>
      ) : (
        <span>Guest</span>
      )}
    </nav>
  );
};

export default NavBar;
