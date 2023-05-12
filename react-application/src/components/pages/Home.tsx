import "../../css/about.css"
const Home = () => {
    return (
        <div>
            <h1>About</h1>
            <div className="question">
                <h1 id="subtitles">Who are we?</h1>
                <p id="answers"> We are Romanian people who love international football </p>

            </div>
            <h1 id="subtitles"> Who do we support? </h1>
            <p id="answers"> We support Liverpool FC, one of the longest standing top-flight English teams </p>
            <h1 id="subtitles">Where to find us?</h1>
            <p id="answers">Probably in one of the following places, with a beer in hand</p>
            <div className="mapcontainer">

            </div>

        </div>
    );
};

export default Home;