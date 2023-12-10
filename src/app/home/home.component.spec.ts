import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';

import { HomeComponent } from "./home.component";

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should not initially show OS ready', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).not.toContain('OS ready');
  });
  
  it('should show OS ready after 5 seconds', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    tick(5000);
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('OS ready');
    flush(); // Flush remaining timers.
  }));
  
  it('should show logging in after 10 seconds', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    tick(10000);
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('Logging in');
    flush(); // Flush remaining timers.
  }));
  
  it('should show auth successful message after 15 seconds', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    tick(15000);
    fixture.detectChanges();

    expect(component).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('Authentication successful');
  }));
});
