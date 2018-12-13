import { Connection } from "typeorm";
import * as faker from "faker";

import { User } from "../../../entity/User";
import {userIdNotLongEnough, passwordNotLongEnough} from "@bng/common";
import {
  duplicateUserId,
} from "./errorMessages";
import { TestClient } from "../../../utils/TestClient";
import { createTestConn } from "../../../testUtils/createTestConn";

faker.seed(Date.now() + 5);
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

describe("Register user", async () => {
  it("check for duplicate userIds", async () => {
    // make sure we can register a user
    const response = await client.register(userId, password);
    expect(response.data).toEqual({ register: null });
    const users = await User.find({ where: { userId } });
    expect(users).toHaveLength(1);
    const user = users[0];
    expect(user.userId).toEqual(userId);
    expect(user.password).not.toEqual(password);

    const response2 = await client.register(userId, password);
    expect(response2.data.register).toHaveLength(1);
    expect(response2.data.register[0]).toEqual({
      path: "userId",
      message: duplicateUserId
    });
  });

  it("check bad userId", async () => {
    const response3 = await client.register("b", password);
    expect(response3.data).toEqual({
      register: [
        {
          path: "userId",
          message: userIdNotLongEnough
        }
      ]
    });
  });

  it("check bad password", async () => {
    // catch bad password
    const response4 = await client.register(faker.internet.email(), "ad");
    expect(response4.data).toEqual({
      register: [
        {
          path: "password",
          message: passwordNotLongEnough
        }
      ]
    });
  });

  it("check bad password and bad userId", async () => {
    const response5 = await client.register("df", "ad");
    expect(response5.data).toEqual({
      register: [
        {
          path: "password",
          message: passwordNotLongEnough
        },
        {
          path: "userId",
          message: userIdNotLongEnough
        }
      ]
    });
  });
});
