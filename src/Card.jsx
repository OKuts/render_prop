import {Mouse} from "./Mouse";

export const Card = () => (
    <div>
        <Mouse>
            {({x, y}) => <p>{`${x} : ${y}`}</p>}
        </Mouse>
    </div>
)
