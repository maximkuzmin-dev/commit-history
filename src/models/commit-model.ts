interface AuthorI {
  date: string;
  email: string;
  name: string;
}

interface CommitI {
  author: AuthorI;
  html_url: string;
  message: string;
  sha: string;
}

export interface CommitModel {
  commit: CommitI;
}
