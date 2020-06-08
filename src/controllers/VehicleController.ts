import { Request, Response, response } from 'express';
import knex from '../database/connection';

class VehicleController {

    async read(request: Request, response: Response) {
        const vehicles = await knex('veiculos').select('*');

        const serializedVehicles = vehicles.map(vehicle => {
            return {
                id: vehicle.id,
                placa: vehicle.placa,
                renavam: vehicle.renavam,
                chassi: vehicle.chassi,
                modelo: vehicle.modelo,
                marca: vehicle.marca,
                ano: vehicle.ano
            };
        });
        return response.json(serializedVehicles);
    }

    async show(request: Request, response: Response) {
        const id = request.params.id;

        const vehicheId = await knex('veiculos').where('id', id).first();

        if (!vehicheId) {
            return response.status(400).json({ message: 'Veiculo não encontrada ' + id });
        }

        return response.json(vehicheId);
    }

    async create(request: Request, response: Response) {
        const {
            placa,
            chassi,
            renavam,
            modelo,
            marca,
            ano
        } = request.body;

        const vehiche = {
            placa,
            chassi,
            renavam,
            modelo,
            marca,
            ano
        };

        const insertId = await knex('veiculos').insert(vehiche);

        return response.json({
            id: insertId[0],
            ...vehiche,
        });
    }

    async delete(request: Request, response: Response) {
        const id = request.params.id;

        const rows = await knex('veiculos').where('id', id).del();

        if (rows == 0) {
            return response.status(400).json({ message: 'Error Delete - Veiculo não encontrado ' + id });
        }

        return response.json({ message: `Veiculo  ${id} deletado. Total de rows ${rows}` });
    }

    async update(request: Request, response: Response) {
        const id = request.params.id;

        const {
            placa,
            chassi,
            renavam,
            modelo,
            marca,
            ano
        } = request.body;

        const vehiche = {
            placa,
            chassi,
            renavam,
            modelo,
            marca,
            ano
        };

        const rows = await knex('veiculos').where('id', id).update(vehiche);

        if (rows == 0) {
            return response.status(400).json({ message: 'Error Update - Veiculo não encontrado ' + id });
        }

        return response.json({
            id: id,
            ...vehiche,
        });
    }

}

export default VehicleController;