import PropTypes from 'prop-types';
//used to be part of react... now its own module

export default function Home(props) {
    return (
        <div className="home">
            <h1>Home page!!!</h1>
            <p>Select User list to find users, select Address list to find their address</p>
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
