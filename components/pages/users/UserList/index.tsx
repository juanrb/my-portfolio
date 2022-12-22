import { UserDto } from '../../../../services/users'
import UserItem from '../UserItem'
import Tw from './styles'

type Props = {
  data: UserDto[]
}

const UserList = ({ data }: Props) => {
  return (
    <Tw.Container>
      {data.map((user, i) => (
        <UserItem key={i} data={user} />
      ))}
    </Tw.Container>
  )
}

export default UserList
