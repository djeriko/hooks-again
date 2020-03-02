import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'

function ComponentE() {

  const user = useContext(UserContext)
  const chanenel = useContext(ChannelContext)

  return (
    <div>
     <ComponentF/> 
     {user} - {chanenel}
    </div>
  )
}

export default ComponentE
