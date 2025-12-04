import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

  // Salvar valor
  async set(key: string, value: any): Promise<void> {
    await Preferences.set({
      key,
      value: JSON.stringify(value)
    });
  }

  // Buscar valor
  async get<T>(key: string): Promise<T | null> {
    const result = await Preferences.get({ key });

    return result.value ? JSON.parse(result.value) : null;
  }

  // Remover valor
  async remove(key: string): Promise<void> {
    await Preferences.remove({ key });
  }

  // Limpar todo o storage
  async clear(): Promise<void> {
    await Preferences.clear();
  }
}
