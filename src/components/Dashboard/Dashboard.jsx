import NavBar from "../NavBar/NavBar";

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

export default Dashboard;