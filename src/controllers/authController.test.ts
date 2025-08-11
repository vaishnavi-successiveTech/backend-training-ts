
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { ValidateJwt } from "./authController";


jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(),
  verify: jest.fn(),
}));

describe("ValidateJwt Middleware", () => {
  let validateJwt: ValidateJwt;
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    validateJwt = new ValidateJwt();
    mockReq = {
      body: {},
    };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };
    mockNext = jest.fn();
    jest.clearAllMocks();
  });

  it("should return 200 and token when name and password are provided", () => {
    mockReq.body = { name: "Vaishnavi", password: "1234" };

    (jwt.sign as jest.Mock).mockReturnValue("fake_jwt_token");
    (jwt.verify as jest.Mock).mockImplementation((token, secret, cb) => {
      cb(null, { name: "Vaishnavi" }); // fake decoded value
    });

    validateJwt.validateJwt(
      mockReq as Request,
      mockRes as Response,
      mockNext
    );

    expect(jwt.sign).toHaveBeenCalledWith(
      { name: "Vaishnavi" },
      expect.any(String),
      { expiresIn: "1h" }
    );
    expect(jwt.verify).toHaveBeenCalledWith(
      "fake_jwt_token",
      expect.any(String),
      expect.any(Function)
    );
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Login successful",
      token: "fake_jwt_token",
    });
  });

  it("should return 401 if name or password is missing", () => {
    mockReq.body = { name: "Vaishnavi" }; // Missing password

    validateJwt.validateJwt(
      mockReq as Request,
      mockRes as Response,
      mockNext
    );

    expect(mockRes.status).toHaveBeenCalledWith(401);
    expect(mockRes.send).toHaveBeenCalledWith("Invalid name or password");
  });

  it("should call next with error if jwt.verify fails", () => {
    mockReq.body = { name: "Vaishnavi", password: "1234" };

    (jwt.sign as jest.Mock).mockReturnValue("fake_jwt_token");
    const fakeError = new Error("Invalid token");
    (jwt.verify as jest.Mock).mockImplementation((token, secret, cb) => {
      cb(fakeError, undefined);
    });

    validateJwt.validateJwt(
      mockReq as Request,
      mockRes as Response,
      mockNext
    );

    expect(mockNext).toHaveBeenCalledWith(fakeError);
  });
});
