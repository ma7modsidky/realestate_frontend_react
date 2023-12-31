import React, {useContext, useState} from 'react'
import { Modal, Button, em } from '@mantine/core'
import {DatePicker} from '@mantine/dates'
import { useMutation } from 'react-query'
import UserContext from '../../context/UserContext'
import { bookVisit } from '../../utils/api'
import "@mantine/dates/styles.css"
function BookingModal({opened, setOpened, propertyId, email}) {
  const [value, setValue] = useState(null)
  const {userDetails : {token}} = useContext(UserContext)
  const {mutate, isLoading} = useMutation({
    mutationFn: ()=> bookVisit(value, propertyId, email, token)
  })
  return (
    <Modal
    opened={opened}
    title="Select your date of visit"
    onClose={() =>setOpened(false)}
    centered
    >
      <div className='flexColCenter'>
        <DatePicker
        value={value}
        onChange={setValue}
        minDate={new Date()} />
        <Button disabled={!value} onClick={()=> mu}>
          Book your visit
        </Button>
      </div>
    </Modal>
  )
}

export default BookingModal