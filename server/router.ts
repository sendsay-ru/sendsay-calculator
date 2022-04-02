import Router from 'express'

import CalculatorController from './controllers/calculator.controller'


const router = Router()

router.post('/api/calculate', CalculatorController.calculate)

export default router
