import { userService } from "./user.service";
import { userRepo } from "../repository/user.repo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IuserRegister } from "../../../entities/IuserRegister";

// Mock userRepo
jest.mock("../repository/user.repo", () => ({
  userRepo: {
    findUserByEmail: jest.fn(),
    insertManyUsers: jest.fn(),
  },
}));

// Mock bcrypt and jwt
jest.mock("bcryptjs", () => ({
  hash: jest.fn(),
  compare: jest.fn(),
}));

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(),
}));

describe("UserService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createUser", () => {
    it("should create a new user when email is not taken", async () => {
      const mockUser: IuserRegister = {
        name: "Vaishnavi",
        email: "vaish@example.com",
        password: "password123",
        role:"user"
      };

      (userRepo.findUserByEmail as jest.Mock).mockResolvedValue(null); // No user exists
      (bcrypt.hash as jest.Mock).mockResolvedValue("hashed_password");
      (userRepo.insertManyUsers as jest.Mock).mockResolvedValue({
        ...mockUser,
        password: "hashed_password",
      });

      const result = await userService.createUser({ ...mockUser });

      expect(userRepo.findUserByEmail).toHaveBeenCalledWith("vaish@example.com");
      expect(bcrypt.hash).toHaveBeenCalledWith("password123", 10);
      expect(userRepo.insertManyUsers).toHaveBeenCalledWith({
        ...mockUser,
        password: "hashed_password",
      });
      expect(result.password).toBe("hashed_password");
    });

    it("should throw error if user already exists", async () => {
      const mockUser: IuserRegister = {
        name: "Vaishnavi",
        email: "vaish@example.com",
        password: "password123",
        role:"user"
      };

      (userRepo.findUserByEmail as jest.Mock).mockResolvedValue(mockUser);

      await expect(userService.createUser(mockUser)).rejects.toThrow(
        "User already exists with this email"
      );
    });
  });

  describe("loginUser", () => {
    it("should login user and return token", async () => {
      const mockUser = {
        _id: "user123",
        name: "Vaishnavi",
        email: "vaish@example.com",
        password: "hashed_password",
      };

      (userRepo.findUserByEmail as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      (jwt.sign as jest.Mock).mockReturnValue("fake_jwt_token");

      const result = await userService.loginUser("vaish@example.com", "password123");

      expect(userRepo.findUserByEmail).toHaveBeenCalledWith("vaish@example.com");
      expect(bcrypt.compare).toHaveBeenCalledWith("password123", "hashed_password");
      expect(jwt.sign).toHaveBeenCalledWith(
        { id: "user123" },
        expect.any(String),
        { expiresIn: "1h" }
      );
      expect(result).toEqual({
        token: "fake_jwt_token",
        user: mockUser,
      });
    });

    it("should throw error if user does not exist", async () => {
      (userRepo.findUserByEmail as jest.Mock).mockResolvedValue(null);

      await expect(
        userService.loginUser("vaish@example.com", "password123")
      ).rejects.toThrow("User does not exist");
    });

    it("should throw error if password is incorrect", async () => {
      const mockUser = {
        _id: "user123",
        email: "vaish@example.com",
        password: "hashed_password",
      };

      (userRepo.findUserByEmail as jest.Mock).mockResolvedValue(mockUser);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(
        userService.loginUser("vaish@example.com", "wrongpassword")
      ).rejects.toThrow("Incorrect password");
    });
  });
});
