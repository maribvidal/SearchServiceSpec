import { Link } from 'react-router-dom';

function LinkButton({ location, buttonId, buttonText }) {
    return (
        <Link to={location}>
            <button id={buttonId} className="linkbutton">
                { buttonText }
            </button>
        </Link>
    );
}

export default LinkButton;