import { PrettyCount } from "./prettyCount";
import {roundingMethods, scales} from "./constants"
const { formatNumber } = PrettyCount();

export { formatNumber, roundingMethods, scales };

export default formatNumber;

export type * from "./types";