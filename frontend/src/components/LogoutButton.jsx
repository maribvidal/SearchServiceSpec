import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
    const { logout: auth0Logout } = useAuth0();
    const logout = () =>
        auth0Logout({ logoutParams: { returnTo: window.location.origin } });

    return (
        <button onClick={logout}>Cerrar sesión</button>
    )
}

export default LogoutButton;