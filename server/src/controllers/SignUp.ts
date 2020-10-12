import { Request, Response } from 'express';

import db from '../database/connection';
import { createHash } from '../utils';

export default class SignUpController {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async create(request: Request, response: Response) {
    // Pegando corpo da quequisição
    console.log(request.body);
    const { name, email, password } = request.body;

    const trx = await db.transaction();

    try {
      // pega email se no banco de dados
      const emailDB = await db('users')
        .where('email', email)
        .then(results => {
          if (results[0].email === email) return results[0].email;
        })
        .catch(() => null);

      // Valida email
      if (emailDB === email) {
        return response.status(400).json({
          error: 'Email já está sendo usado',
        });
      }

      const hash = createHash(password);

      // Salvando no banco de dados
      await trx('users').insert({
        name,
        email,
        password: hash,
      });

      await trx.commit();

      // mensagem de sucesso
      return response.status(201).json({
        mensagem: 'Cadastrado com sucesso',
      });
    } catch (err) {
      await trx.rollback();

      return response.status(400).json({
        error: 'Unexpect error while creating new User',
      });
    }
  }
}
