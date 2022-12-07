import { ElementId } from './enums';

export interface DraggableItem {
  component: React.ReactNode;
  id: ElementId;
  isOnCanvas: boolean;
}
