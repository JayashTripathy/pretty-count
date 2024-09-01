import { PrettyCount } from "./prettyCount";
import {roundingMethods} from "./constants"
const { formatNumber } = PrettyCount();

export { formatNumber, roundingMethods };

export default formatNumber;

export type * from "./types";