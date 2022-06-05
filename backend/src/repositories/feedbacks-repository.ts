export interface FeedBackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedBacksRepository {
  create: (data: FeedBackCreateData) => Promise<void>;
}
