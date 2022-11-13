import type { AxiosInstance } from 'axios';
import { DeleteTodoType, UpdateTodoType } from '../../interfaces/Response';
import type { TodoType } from '../../interfaces/Todo';

export class TodoModule {
  private axios;

  private basePath;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
    this.basePath = '/todo';
  }

  async getAll() {
    const { data } = await this.axios.get<TodoType[]>(`${this.basePath}`);
    return data;
  }

  async get(id: string) {
    const { data } = await this.axios.get<TodoType>(`${this.basePath}/${id}`);
    return data;
  }

  async create(body: TodoType) {
    const { data } = await this.axios.post<TodoType>(`${this.basePath}/`, body);
    return data;
  }

  async update(id: string, body: TodoType) {
    const { data } = await this.axios.patch<UpdateTodoType>(`${this.basePath}/${id}`, body);
    return data;
  }

  async delete(id: string) {
    const { data } = await this.axios.delete<DeleteTodoType>(`${this.basePath}/${id}`);
    return data;
  }
}
