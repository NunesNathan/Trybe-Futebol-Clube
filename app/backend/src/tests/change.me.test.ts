import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import UserRepository from '../useCases/repositories/UserRepository';

import { Response } from 'superagent';
import { invalidUser, userResponse, validUser } from './repositories/UserRepository';

chai.use(chaiHttp);

const { expect } = chai;

describe('User', () => {
  let response: Response;
  let repository: sinon.SinonStub;

  describe('User Login', () => {
    before(async () => {
      repository = sinon
        .stub(UserRepository.prototype, 'findByEmail')
        .resolves(
          userResponse
        );
    });
  
    after(()=>{
      repository.restore();
    })

    it('Success case', async () => {
      const { email, password } = validUser;
      const response = await chai.request(app)
        .post('/login')
        .send({ email, password });
      
      expect(response).to.have.status(200);

      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('user');
      expect(response.body).to.have.property('token');

      expect(response.body.user).to.be.an('object');
      expect(response.body.user).to.have.property('id');
      expect(response.body.user).to.have.property('username');
      expect(response.body.user).to.have.property('email');
      expect(response.body.user).to.have.property('role');

      expect(response.body.token).to.be.a('string');
    })

    it('Fail case', async () => {
      const { email, password } = invalidUser;
      const response = await chai.request(app)
        .post('/login')
        .send({ email, password });
      
      expect(response).to.have.status(401);

      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('message');

      expect(response.body.message).to.be.a('string');
      expect(response.body.message).to.be.equals('Incorrect email or password');
    })
  });
});
