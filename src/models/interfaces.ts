export interface Node {
  id: string;
  name: string;
  children?: Node[];
  active?: boolean;
  marked?: boolean;
}
export interface TreeViewListProps {
  data: Node[];
}
