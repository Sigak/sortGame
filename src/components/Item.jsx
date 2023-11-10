import {Tree} from "./Tree"

const STEP = 15;
export default function Item(props) {
    const {value, isSelected, onClick} = props;
    const height = value * STEP;

    return (<div
        className={isSelected ? `item selected` : "item"}
        onClick={onClick}
    >
        <Tree/>
        <div
            style={{height: `${height}px`}}
            className="fragment"
            >
        </div>
    </div>);
}