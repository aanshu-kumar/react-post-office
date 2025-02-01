import React from 'react'

const PostOffice = ({item}) => {
  return (
    <div className='border border-gray-300 p-2 rounded-sm w-4/9'>
      <p className='py-1 text-lg'>Name: {item.Name}</p>
      <p className='py-1 text-lg'>Branch Type: {item.BranchType}</p>
      <p className='py-1 text-lg'>Deliversy: Status {item.DeliveryStatus}</p>
      <p className='py-1 text-lg'>District: {item.District}</p>
      <p className='py-1 text-lg'>Division: {item.Division}</p>
    </div>
  )
}

export default PostOffice
