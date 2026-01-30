
export interface Memory {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface LoveReason {
  id: number;
  text: string;
}

export enum PageSection {
  HOME = 'home',
  LETTER = 'letter',
  MEMORIES = 'memories',
  REASONS = 'reasons',
  AI_POETRY = 'ai-poetry'
}
