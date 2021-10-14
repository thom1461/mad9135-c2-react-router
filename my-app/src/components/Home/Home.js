import PropTypes from 'prop-types';
//used to be part of react... now its own module

export default function Home(props) {
    return (
        <div className="home">
            <p>Home page.</p>
        </div>
    );
}

//add PropTypes
Home.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    findPlanet: PropTypes.func,
    isAlive: PropTypes.bool.isRequired,
    anything: PropTypes.any.isRequired,
    myobj: PropTypes.shape({
        email: PropTypes.string,
        age: PropTypes.number,
    }),
    greet: PropTypes.oneOf(['hello', 'goodbye']),
    something: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
