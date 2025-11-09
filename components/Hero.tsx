'use client'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-secondary to-primary text-white pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-accent mb-4">WELCOME TO ROOFSHELTER</h4>
            <h1 className="text-5xl font-bold mb-4">MODERN</h1>
            <h2 className="text-4xl font-bold mb-6">ROOFING SOLUTION</h2>
            <p className="text-lg mb-8">
              At RoofShelter, we specialize in delivering high-quality roofing solutions 
              that protect your home and business.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg text-lg font-semibold">
              About Us
            </button>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Get your Estimate</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}