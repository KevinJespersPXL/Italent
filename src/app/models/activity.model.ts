export interface Activity {
  id: number;
  title: string;
  date: string;
  type: string;
  description?: string;
  learnings?: string[];
  tags?: string[];
}

export interface DetailedActivity extends Activity {
  description: string;
  learnings: string[];
  tags: string[];
}

export type TabType = 'overzicht' | 'selectie' | 'eindreflectie';
