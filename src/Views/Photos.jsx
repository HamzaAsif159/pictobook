import { React, useContext } from 'react'
import { Context } from '../../Context/Context'
import { getClass } from '../../utils/getClass'
import Image from '../components/Image'

export default function Photos() {
  const { allPhotos } = useContext(Context)

  const photos = allPhotos.map((img, i) => <Image key={img.id} img={img} className={getClass(i)} />)

  return <div className="photos">{photos}</div>
}
