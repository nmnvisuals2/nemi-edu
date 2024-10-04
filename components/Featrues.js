'use client'

import React from 'react'
import { Card, CardBody, Badge,Chip } from '@nextui-org/react'
import { motion } from 'framer-motion'


export default function FeatureRenderer({ features }) {
  return (
   <div className='flex flex-col items-start justify-start w-full'>
        <h2 className="text-3xl gradtext font-semibold mb-4">Course Features</h2>
        <ul className="space-y-3 w-full">
          {features.map((feature) => (
            <motion.li
              key={feature.index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-row items-center justify-start py-2 rounded-lg"
            >
               <svg className='text-lime-500  mr-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              <span className="text-sm font-medium">{feature.content}</span>
              {feature.badge && (
                <Chip
                  
                  style={{ backgroundColor: feature.color }}
                   className='text-white ml-2'
                 size='sm'
                >
                  {feature.badge}
                </Chip>
              )}
            </motion.li>
          ))}
        </ul>
        {features.length === 0 && (
          <p className="text-center text-gray-500">No features available</p>
        )}
     </div>
  )
}