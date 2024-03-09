import AppNavBar from "../components/app/AppNavBar.jsx";
function DefaultLayout({ leftColumn, rightColumn }) {

    return (
        <>
            <AppNavBar/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-7">
                        { leftColumn }
                    </div>
                    <div className="col-md-5">
                        { rightColumn }
                    </div>
                </div>
            </div>
        </>
    )
}

export default DefaultLayout