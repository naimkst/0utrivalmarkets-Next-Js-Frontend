import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/HomePage/AboutSection'
import HeroSection from '../components/HomePage/HeroSection'
import TestimonialSection from '../components/HomePage/TestimonialSection'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <TestimonialSection/>
    </>
  )
}

export default Home
