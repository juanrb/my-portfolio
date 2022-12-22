import { UserDto } from '../../../../services/users'
import Tw from './styles'

type Props = {
  data: UserDto
}

const UserItem = ({ data }: Props) => {
  return (
    <Tw.Container>
      <Tw.NameWrapper>
        <Tw.Badge className="">JD</Tw.Badge>
        <Tw.Name>{data.name}</Tw.Name>
      </Tw.NameWrapper>
      <Tw.Email>{data.email}</Tw.Email>
      <Tw.City>{data.address.city}</Tw.City>
      <Tw.Company>{data.company.name}</Tw.Company>
    </Tw.Container>
  )
}

export default UserItem
