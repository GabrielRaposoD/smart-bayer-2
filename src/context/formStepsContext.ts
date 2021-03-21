import React, { useContext } from 'react'

interface StepsContext {
  currentStep: number
  setCurrentStep: (step: number) => void
}

export const StepContext = React.createContext(null)

export const useSteps = () => useContext<StepsContext>(StepContext)
