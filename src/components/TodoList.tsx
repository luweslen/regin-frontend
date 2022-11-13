import { useState, useEffect } from 'react';
import { Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { todoService } from '../services';
import type { TodoType } from '../interfaces/Todo';

function TodosList() {
	const [data, setData] = useState<TodoType[]>([]);

	const columns: ColumnsType<TodoType> = [
		{
			title: 'Título',
			dataIndex: 'title',
			key: 'title',
		},
		{
			title: 'Descrição',
			dataIndex: 'description',
			key: 'description',
		},
		{
			title: '',
			key: 'done',
			dataIndex: 'done',
			render: (_, { done }) => (
				<Tag color={done ? 'green' : 'red'} key={`state_${done}`}>
					{done ? 'FEITO :)' : 'NÃO FEITA :('}
				</Tag>
			),
		},
	];

	async function handleFetchTodos() {
		const todos = await todoService.getAll();

		setData(todos);
	}

	useEffect(() => {
		handleFetchTodos();
	}, []);

	return (
		<Table
			columns={columns}
			dataSource={data}
		/>
	);
}

export { TodosList };
