import { ResolverMap } from "../../../types/graphql-utils";
import { User } from "../../../entity/User";
import { formatYupError } from "../../../utils/formatYupError";
import {
  duplicateUserId
} from "./errorMessages";
import {validUserSchema} from '@bng/common';
// import { createConfirmEmailLink } from "../../utils/createConfirmEmailLink";
// import { sendEmail } from "../../utils/sendEmail";


export const resolvers: ResolverMap = {
  Mutation: {
    register: async (
      _,
      args: GQL.IRegisterOnMutationArguments
      // { redis, url }
    ) => {
      try {
        await validUserSchema.validate(args, { abortEarly: false });
      } catch (err) {
        return formatYupError(err);
      }

      const { userId, password } = args;

      const userAlreadyExists = await User.findOne({
        where: { userId },
        select: ["id"]
      });

      if (userAlreadyExists) {
        return [
          {
            path: "userId",
            message: duplicateUserId
          }
        ];
      }

      const user = User.create({
        userId,
        password
      });

      await user.save();

      // if (process.env.NODE_ENV !== "test") {
      //   await sendEmail(
      //     email,
      //     await createConfirmEmailLink(url, user.id, redis)
      //   );
      // }

      return null;
    }
  }
};
