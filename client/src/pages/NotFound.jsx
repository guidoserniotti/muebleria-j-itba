import { Link } from 'react-router-dom';
function NotFound() {
return (
<section style={{ textAlign: 'center', padding: 'var(--spacinglg) var(--spacing-md)' }}>
<h2>Página no encontrada</h2>
<p>La dirección que buscás no existe.</p>
<Link to="/">Volver al inicio</Link>
</section>
);
}
export default NotFound;
