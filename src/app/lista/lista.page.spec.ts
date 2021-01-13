import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ListaPage } from './lista.page';

describe('Tab1Page', () => {
  let component: ListaPage;
  let fixture: ComponentFixture<ListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
