import { CarProps } from "@/types"
import Image from "next/image"
import { useState } from "react"

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {

    const { city_mpg, drive, make, model, transmission, year } = car;
  return (
    <div>CarCard</div>
  )
}

export default CarCard