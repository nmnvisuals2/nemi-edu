import React from 'react'
import { Input, Button,  Card, CardBody, CardHeader } from '@nextui-org/react'
import DefaultLayout from '../../layout/DefaultLayout'

export default function Component() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
  }

  return ( <DefaultLayout>
    <div className="max-w-6xl container px-4 py-8 mx-auto">
      <Card className="w-full">
        <CardHeader className="flex flex-col items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <h1 className="text-3xl font-bold">Nemi Course Registration</h1>
          <p className="text-lg">Sign up for our exciting courses!</p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              variant="bordered"
              isRequired
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              variant="bordered"
              isRequired
            />
            <Input
              label="Phone Number"
              placeholder="Enter your phone number"
              type="tel"
              variant="bordered"
              isRequired
            />
            <Input
              label="City"
              placeholder="Enter your city"
              variant="bordered"
              isRequired
            />
            <Input
              label="School"
              placeholder="Enter your school name"
              variant="bordered"
              isRequired
            />
            <Button
              type="submit"
              color="primary"
              size="lg"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white"
            >
              Register for Course
            </Button>
          </form>
        </CardBody>
      </Card>
    </div></DefaultLayout>
  )
}