import {useParams} from "react-router-dom";

export default function UniqueForUri(Component, paramName) {
    return () => {
        let params = useParams();

        return (<Component key={params[paramName]}/>);
    };
}