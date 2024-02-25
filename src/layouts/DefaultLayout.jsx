function DefaultLayout({ leftColumn, rightColumn }) {

    //TODO move nav to a separate component
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
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
        </div>
    )
}

export default DefaultLayout