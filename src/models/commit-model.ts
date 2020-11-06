interface AuthorDataI {
  date: string;
  email: string;
  name: string;
}

interface TreeDataI {
  sha: string;
}

interface CommitDataI {
  author: AuthorDataI;
  html_url: string;
  message: string;
  tree: TreeDataI;
}

export interface CommitModel {
  commit: CommitDataI;
}
