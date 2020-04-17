import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MetalPage } from './metal.page';

describe('MetalPage', () => {
  let component: MetalPage;
  let fixture: ComponentFixture<MetalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MetalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
