import { prisma } from "../../prisma";
import { FeedBacksRepository, FeedBackCreateData } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedBacksRepository{
  async create({type, comment, screenshot}: FeedBackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    });    
  }
}
