import React from 'react'

export default function Page({ params }: { params: {id:string} }) {
  return (
    <div className='mt-16'>Page : {params.id}</div>
  )
}
