import axios from './axios';
import { TodoModule } from './modules/todos';

export const todoService = new TodoModule(axios);

export default { todoService };
