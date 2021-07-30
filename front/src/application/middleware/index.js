import user from './user';
import publication from './publication'
import comment from './comment'

const middleware = [
    ...user,
    ...publication,
    ...comment,
]

export default middleware;
