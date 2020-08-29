import AppError from '../errors/AppError';

import { getCustomRepository, TransactionRepository }  from 'typeorm';

import Transaction from '../models/Transaction';

import Transactionsrepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(Transactionsrepository);

    const transaction = await transactionsRepository.findOne(id);

    if(!transaction) {
      throw new AppError('Transaction doesn´t exist');
    }

     await transactionsRepository.remove(transaction)


  }
}

export default DeleteTransactionService;
