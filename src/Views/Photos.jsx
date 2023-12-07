import { React, useContext } from 'react'
import { Context } from '../../Context/Context'
import { getClass } from '../../utils/getClass'
import Image from '../components/Image'
import Header from '../components/Header'

export default function Photos() {
  const { allPhotos } = useContext(Context)

  const photos = allPhotos.map((img, i) => <Image key={img.id} img={img} className={getClass(i)} />)

  return (
    <>
      <Header />
      <div className="photos">{photos}</div>
    </>
  )
}
