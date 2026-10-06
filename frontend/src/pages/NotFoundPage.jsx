import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <section>
            <h2>Error 404 - Página no encontrada.</h2>
            <Link to="/">Volver al inicio</Link>
        </section>
    )
}

export default NotFoundPage;