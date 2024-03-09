import DefaultLayout from "../layouts/DefaultLayout.jsx";
function HomePage() {

    return(
        <DefaultLayout leftColumn={<div>Home</div>}
                       rightColumn={null}/>
    )
}

export default HomePage