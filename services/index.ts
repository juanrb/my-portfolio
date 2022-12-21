const users = () => {
	return ({
		queryKey: 'users',
		queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
	})
}

export default users
