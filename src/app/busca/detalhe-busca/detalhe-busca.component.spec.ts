import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheBuscaComponent } from './detalhe-busca.component';

describe('DetalheBuscaComponent', () => {
  let component: DetalheBuscaComponent;
  let fixture: ComponentFixture<DetalheBuscaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheBuscaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
