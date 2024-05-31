import React, { useState, useEffect } from 'react'
import styles from './Carousel.module.scss'
import { ApolloQuerys } from '@/Apollo'
import { useQuery } from '@apollo/client'
import { LoaderTarget } from '@/components/Shared'

const Carousel = ({ titanInfo, setTitanInfo }) => {

  const { data, loading } = useQuery(ApolloQuerys.GET_TITANS)

  const infoTitans = data?.getTitans

  return (
    <div className={styles.containerTitans}>
      <h1>Click on a titan!</h1>

      <div className={styles.containerTargetTitans}>
        {loading === false ? (
          infoTitans.map( data => (
            <div className={styles.targetImg} key={data.id} onClick={() => setTitanInfo(data)}>
              <img src={data.picture} className={styles.imgTitan} />
              <h3>{data.name}</h3>
            </div>
          ))
          ) : <h1>Loading...</h1>
        }
      </div>

    </div>
  )
}

export { Carousel }