import * as bcrypt from "bcryptjs";

import { ResolverMap } from "../../../types/graphql-utils";
import { User } from "../../../entity/User";
import {
  invalidLogin,
  confirmUserIdError,
  forgotPasswordLockedError
} from "./errorMessages";
import { userSessionIdPrefix } from "../../../constants";

const errorResponse = [
  {
    path: "userId",
    message: invalidLogin
  }
];

export const resolvers: ResolverMap = {
  Mutation: {
    login: async (
      _,
      { userId, password }: GQL.ILoginOnMutationArguments,
      { session, redis, req }
    ) => {
      const user = await User.findOne({ where: { userId } });

      if (!user) {
        return errorResponse;
      }

      if (!user.confirmed) {
        return [
          {
            path: "userId",
            message: confirmUserIdError
          }
        ];
      }

      if (user.forgotPasswordLocked) {
        return [
          {
            path: "userId",
            message: forgotPasswordLockedError
          }
        ];
      }

      const valid = await bcrypt.compare(password, user.password);

      if (!valid) {
        return errorResponse;
      }

      // login sucessful
      session.userId = user.id;
      if (req.sessionID) {
        await redis.lpush(`${userSessionIdPrefix}${user.id}`, req.sessionID);
      }

      return null;
    }
  }
};
