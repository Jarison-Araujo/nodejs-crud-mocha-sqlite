import express from 'express';

import VehicleController from '../controllers/VehicleController';

const routes = express.Router();

const vehicleController = new VehicleController();

routes.get('/veiculos', vehicleController.read);
routes.get('/veiculos/:id', vehicleController.show);
routes.delete('/veiculos/:id', vehicleController.delete);
routes.put('/veiculos/:id', vehicleController.update);
routes.post('/veiculos', vehicleController.create);

export default routes;