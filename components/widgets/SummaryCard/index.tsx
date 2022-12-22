import React from 'react'
import Card from '../../wrappers/Card'
import Tw from './styles'

type Props = {
  icon: React.ReactNode
  title: string
  value: string
}

const SummaryCard = (props: Props) => {
  return (
    <Card>
      <Tw.DataWrapper>
        <Tw.DataTitle>{props.title}</Tw.DataTitle>
        <Tw.DataValue>{props.value}</Tw.DataValue>
      </Tw.DataWrapper>
      <Tw.IconWrapper>{props.icon}</Tw.IconWrapper>
    </Card>
  )
}

export default SummaryCard
