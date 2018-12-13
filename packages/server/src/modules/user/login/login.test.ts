import { Connection } from "typeorm";
import * as faker from "faker";

import { invalidLogin, confirmUserIdError } from "./errorMessages";
import { User } from "../../../entity/User";
import { TestClient } from "../../../utils/TestClient";
import { createTestConn } from "../../../testUtils/createTestConn";

faker.seed(Date.now() + 1);
const userId = faker.internet.email();
const password = faker.internet.password();

const client = new TestClient(process.env.TEST_HOST as string);

let conn: Connection;
beforeAll(async () => {
  conn = await createTestConn();
});
afterAll(async () => {
  conn.close();
});

const loginExpectError = async (e: string, p: string, errMsg: string) => {
  const response = await client.login(e, p);

  expect(response.data).toEqual({
    login: [
      {
        path: "userId",
        message: errMsg
      }
    ]
  });
};

describe("login", () => {
  test("userId not found send back error", async () => {
    await loginExpectError(
      faker.internet.email(),
      faker.internet.password(),
      invalidLogin
    );
  });

  test("userId not confirmed", async () => {
    await client.register(userId, password);

    await loginExpectError(userId, password, confirmUserIdError);

    await User.update({ userId }, { confirmed: true });

    await loginExpectError(userId, faker.internet.password(), invalidLogin);

    const response = await client.login(userId, password);

    expect(response.data).toEqual({ login: null });
  });
});
