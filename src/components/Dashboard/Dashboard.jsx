import PropTypes from 'prop-types';

const Dashboard = ({children}) => {
    return (
        <div>
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