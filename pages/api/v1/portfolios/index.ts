import type { NextApiRequest, NextApiResponse } from "next";

import connectDB from "../../../../src/middleware/mongodb";
import Portfolios from "../../../../src/models/portfolio";

const handler = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  // const errors: Result<ValidationError> = await validationResult(req);
  // if (!errors.isEmpty()) {
  //   const firstError: string = await errors.array().map((err) => err.msg)[0];
  //   return res.status(422).json({ msg: firstError });
  // } else {
  try {
    await Portfolios.find({})
      .sort({ createdAt: -1 })
      .exec(async (err: Object, portfolios) => {
        res.status(200).json(portfolios);
      });
  } catch (error) {
    res.status(500).json({
      msg: error.message,
      error,
    });
  }
};

export default connectDB(handler);
