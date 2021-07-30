import user from './user';
import publication from './publication'

const middleware = [
    ...user,
    ...publication,
]

export default middleware;
