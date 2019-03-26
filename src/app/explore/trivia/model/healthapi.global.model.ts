import { HealthApiArticle } from './healthapi.article.model';

export class HealthApiGlobal {
  status : string;
  source : string;
  sortBy : string;
  articles : HealthApiArticle[];
}