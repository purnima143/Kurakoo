const mongoose = require("mongoose");
const User = require('../models/user.model');
const chai = require("chai");
const chaiHttp = require("chaiHttp");
const server = require("../index");
const should = chai.should();

const User = require("../models/user.model");

chai.use(chaiHttp);

describe('POST /api/signup', () => {
    it('should create a user', (done) => {
        var email = "example@email.com",
        var password = "12345678";

        request(app)
            .post('/api/signup')
            .send({email, password})
            .expect((res) => {
                expect(res.headers['x-auth']).not.toBeNull();
                expect(res.body._id).not.toBeNull();
                expect(res.body.email).toBe(email);
            })
            .end((err) => {
                if(err) return done(err);

                User.findOne({email}).then((user) => {
                    expect(user).not.toBeNull();
                    expect(user.password).not.toBe(password);
                    done();
                });
            });
    });
    it('should return validation errors if request is invaild', (done) => {
        request(app)
          .post('/api/signup')
          .send({
            email: "someRandomText",
            password: "011001RandomPswd"
          })
          .expect(400)
          .end(done);
      });
    
      it('should not create user if email in use', (done) => {
        request(app)
          .post('/api/signup')
          .send({
            email: users[0].email,
            password: "12345670"
          })
          .expect(400)
          .end(done);
      });
});