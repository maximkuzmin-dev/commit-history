import React from 'react';
import { Badge, ListGroupItem } from 'reactstrap';

import './index.css';

interface CommitItemProps {
  authorName: string;
  authorEmail: string;
  commitMessage: string;
}

const CommitItem: React.FC<CommitItemProps> = ({ authorName, authorEmail, commitMessage }) => {
  return (
    <ListGroupItem className="list-item" color="info">
      <div className="sub-data">
        <Badge pill color="warning">
          author
        </Badge>
        {authorName}
      </div>
      <div className="sub-data">
        <Badge pill color="warning">
          email
        </Badge>
        {authorEmail}
      </div>
      <div className="sub-data">
        <Badge pill color="warning">
          message
        </Badge>
        {commitMessage}
      </div>
    </ListGroupItem>
  );
};

export default CommitItem;
