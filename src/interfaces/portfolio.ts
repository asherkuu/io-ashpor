import { Document } from "mongoose";

export default interface IPortfolio extends Document {
  seq: number;
  userId: string;
  title: string;
  site: string;
  buyer: string;
  location: string;
  startDate: Date;
  endDate: Date;
  jobTitle: string;
  description: string;
  img: {
    originalname: string;
    location: string;
    mimetype: string;
    size: number;
    key: string;
  };
  content: string;
}
