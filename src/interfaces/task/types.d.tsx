export interface Task {
  id: string;
  name: string;
  tags: [string];
  status: string;
  assignee: {
    id: string;
    fullName: string;
    email: string;
    type: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
  };
  creator: {
    id: string;
    fullName: string;
    email: string;
    type: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
  };
  position: number;
  dueDate: string;
  pointEstimate: string;
  createdAt: string;
}

export interface CreateTask {
  name?: string;
  tags: string[];
  status: string;
  assigneeId: string;
  dueDate: Date;
  pointEstimate: string;
}

export interface UpdateTask {
  name?: string;
  tags: string[];
  status: string;
  position?: number,
  assigneeId: string;
  dueDate: Date;
  pointEstimate: string;
}
