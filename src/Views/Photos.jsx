import { React, useContext } from 'react'
import { ThreeDots } from 'react-loader-spinner'

import { Context } from '../../Context/Context'
import { getClass } from '../../utils/getClass'
import Image from '../components/Image'
import Header from '../components/Header'

export default function Photos() {
  const { allPhotos, isFetching } = useContext(Context)

  const photos = allPhotos?.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ))

  console.log(isFetching)

  return (
    <>
      <Header />
      {isFetching ? (
        <div className="spinner">
          <ThreeDots
            height="80"
            width="100"
            radius="9"
            color="#293264"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <div className="photos">{photos}</div>
      )}
    </>
  )
}
