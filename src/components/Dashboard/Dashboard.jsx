import NavBar from "../NavBar/NavBar";
import PropTypes from 'prop-types';

const Dashboard = ({children}) => {
    return (
        <div>
            <NavBar/>
            <div>
                {children}
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Dashboard;