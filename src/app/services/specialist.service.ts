import { Injectable } from '@angular/core';
import { SPECIALISTS, Specialist, SpecialistSearchResultBorder } from '../data/specialists';
import { FilterSelection } from '../models/filter-selection';

export interface SpecialistSearchResult {
  id: number;
  name: string;
  details: string[];
  avatar: string;
  alt: string;
  border: SpecialistSearchResultBorder;
}

@Injectable({ providedIn: 'root' })
export class SpecialistService {
  private readonly specialists = SPECIALISTS;

  public async search(term: string, selection?: FilterSelection): Promise<SpecialistSearchResult[]> {
    const normalizedTerm = term.trim().toLowerCase();

    const results = !normalizedTerm
      ? this.specialists
      : this.specialists.filter((specialist) =>
          this.buildSearchIndex(specialist).some((value) => value.includes(normalizedTerm)),
        );

    void selection;

    await this.simulateNetworkLatency(260, 180);

    return results.map((specialist) => ({
      id: specialist.id,
      name: specialist.name,
      details: specialist.searchSummary.details,
      avatar: specialist.avatar,
      alt: specialist.avatarAlt,
      border: specialist.searchSummary.border,
    }));
  }

  public async getSpecialistById(id: number): Promise<Specialist | null> {
    if (!Number.isFinite(id)) {
      return null;
    }

    await this.simulateNetworkLatency(320, 200);

    return this.specialists.find((specialist) => specialist.id === id) ?? null;
  }

  private buildSearchIndex(specialist: Specialist): string[] {
    const specializationTitles = specialist.specializations.flatMap((item) => [
      item.title,
      item.subtitle,
    ]);

    const contactTexts = specialist.contactInfo.map((item) => item.text);

    return [
      specialist.name,
      specialist.biography,
      ...specialist.searchSummary.details,
      ...specializationTitles,
      ...contactTexts,
      ...specialist.searchSummary.keywords,
    ].map((value) => value.toLowerCase());
  }

  private async simulateNetworkLatency(base: number, variance: number): Promise<void> {
    const jitter = Math.floor(Math.random() * variance);
    const delay = base + jitter;

    await new Promise((resolve) => setTimeout(resolve, delay));
  }
}
