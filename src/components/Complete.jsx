import {Link} from "react-router-dom";

export default function Complete(params) {
    const {nextLevel} = params;

    return (
        <div className="complete">
            <Link to={`/level/${nextLevel}`}><span>УРА!</span></Link>
        </div>
    );
}