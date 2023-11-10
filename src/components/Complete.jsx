import {Link} from "react-router-dom";

export default function Complete(params) {
    const {levelId} = params;

    return (
            <Link to={`/level/${+levelId + 1}`} className="complete">
                <span>{`Уровень: ${levelId}`}</span>
                <span className="status">Пройден!</span>
            </Link>
    );
}