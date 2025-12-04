import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { v4 as uuidv4 } from 'uuid';
import { ModalController } from '@ionic/angular';
import { EntryModalComponent } from '../entry-modal/entry-modal.component';


@Component({ selector: 'app-home', templateUrl: 'home.page.html', styleUrls: ['home.page.scss'] })
export class HomePage implements OnInit {
entries: Entry[] = [];
filter: 'all' | "recurso" | "local" | "perigo" = 'all';


constructor(private storage: StorageService, private modalCtrl: ModalController) {}


async ngOnInit() {
await this.refresh();
}


async refresh() {
this.entries = await this.storage.getAll();
}


filtered() {
if (this.filter === 'all') return this.entries;
return this.entries.filter(e => e.tipo === this.filter);
}


async openNew() {
const modal = await this.modalCtrl.create({ component: EntryModalComponent, componentProps: { mode: 'create' } });
modal.onDidDismiss().then(async ({ data }) => {
if (data && data.entry) {
data.entry.id = uuidv4();
data.entry.dataCriacao = new Date().toISOString();
await this.storage.add(data.entry);
await this.refresh();
}
});
await modal.present();
}


async openEdit(entry: Entry) {
const modal = await this.modalCtrl.create({ component: EntryModalComponent, componentProps: { mode: 'edit', entry } });
modal.onDidDismiss().then(async ({ data }) => {
if (data && data.entry) {
await this.storage.update(data.entry);
await this.refresh();
}
});
await modal.present();
}


async remove(id: string) {
await this.storage.remove(id);
await this.refresh();
}
}