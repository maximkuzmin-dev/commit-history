export interface CommitModel {
  commit: { author: { date: string; email: string; name: string }; message: string };
}
