import Knex from 'knex';

export async function seed(knex: Knex){
    await knex('veiculos').insert([
        {
            placa: 'HKD-9988', 
            chassi: 'kdjkdjkjdjkjdkjd56565',
            renavam: '34343545465756',
            modelo: 'Fox 1.0',
            marca: 'Volkswagen',
            ano: '2009'
        },
        {
            placa: 'RTR-1234', 
            chassi: 'k45454jiiiiiii65',
            renavam: '12456789012',
            modelo: 'Idea 1.8 ADV',
            marca: 'Fiat',
            ano: '2013'
        },
    ]);
}