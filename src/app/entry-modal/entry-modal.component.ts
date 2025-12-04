import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entry-modal',
  standalone: true,
  imports: [IonicModule, FormsModule],
  templateUrl: './entry-modal.component.html',
  styleUrls: ['./entry-modal.component.scss']
})
export class EntryModalComponent {
  tempEntry = {
    titulo: '',
    descricao: '',
    tipo: ''
  };

  close() {}
  save() {}
}
