import { z } from 'zod';
import { AccountAlreadyExists } from '../errors/AccountAlreadyExists';
import { IController, IRequest, IResponse } from '../interfaces/IController';
import { SignUpUseCase } from '../useCases/SignUpUseCase';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(2),
});

export class SignUpController implements IController {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}

  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { email, password, name } = schema.parse(body);
      await this.signUpUseCase.execute({ email, password, name });

      return {
        statusCode: 204,
        body: null,
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }

      if (error instanceof AccountAlreadyExists) {
        return {
          statusCode: 409,
          body: { error: 'Account already exists' },
        };
      }

      return {
        statusCode: 500,
        body: { error: 'Internal server error' },
      };
    }
  }
}
