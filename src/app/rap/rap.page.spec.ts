import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RapPage } from './rap.page';

describe('RapPage', () => {
  let component: RapPage;
  let fixture: ComponentFixture<RapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
